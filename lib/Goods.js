function Good(data) {
  this.kdbarang = data.kdbarang;
  this.kdbarcode = data.kdbarcode;
  this.nama = data.nama;
  this.hargau = data.hargau;
  this.qty = data.qty;
}

function GoodsCollection(data) {
  let _goods = [];
  const newData = _goods.slice();
  newData.push(data);
  this.goods = newData;
}

GoodsCollection.prototype.add = function(data) {
  const newData = this.goods.slice();
  newData.push(data);
  this.goods = newData;
};

module.exports = {
  Good,
  GoodsCollection
};
