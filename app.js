const readline = require("readline");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">>>>>>> "
});

rl.prompt();

rl.on("line", _input => {
  if (_input === "exit") {
    console.log("bye");
    process.exit(0);
  } else {
    console.log('app running')
  }

  rl.prompt();
});
