const express = require("express");
const app = express();
const knex = require("knex")

const PORT = 5678;

const knexconf = {
  client :"mysql",
  connection :{
    host :"127.0.0.1",
    port :3307,
    database :"gudang",
    user:"root",
    password:"wlingi123456789",
    insecureAuth :true
  }
}
const knx = knex(knexconf)

app.listen(PORT, err => {
  return !err && console.log("service running");
});

function search(req, res) {
  const where = advancedSearch(req.query.keyword);
  knx
    .select("goods.kdbarang","goods.kdbarcode","goods.nama","price.hargau","stockitem.qty" )
    .from("goods")
    .innerJoin("price", "goods.kdbarang", "price.kdbarang")
    .innerJoin("stockitem", "goods.kdbarang", "stockitem.kdbarang")
    .whereRaw(`${where}`)
    .andWhere("goods.deleted", 0)
    .andWhere("price.deleted", 0)
    .orWhereRaw("goods.kdbarcode REGEXP ?", [req.query.keyword])
    .orderBy("stockitem.qty", "desc")
    .then(row => res.send(row))
    .catch(err => console.log(err));
}
function advancedSearch(keyw) {
  const inp = keyw;
  const inpToArr = inp.split(" ");
  let crit = "";
  for (let i = 0; i < inpToArr.length; i++) {
    crit += `goods.nama REGEXP '${inpToArr[i]}' AND `;
  }
  const critEx = crit.substr(0, crit.length - 5);
  return critEx;
}

app.get("/search",search)