const yargs = require("yargs");

const argv = yargs.argv;

const section = argv._[0];
const menu = argv._[1];

const transfer = {
  keyword: "transfer",
  alias: "tr",
  menu: {
    add: () => {},
    use: () => {},
    purge: () => {}
  }
};

function App(section, menu) {
  const run = () => {
    if (section === transfer.keyword || section === transfer.alias) {
      console.log("program  is running");
    }
  };
  return Object.freeze({ run });
}

const app = App(section, menu);
app.run();
