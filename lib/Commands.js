function Commands(command, option) {
  this.commands = command;
  this.option = option;
  this.isValid = false;
}

Commands.prototype.validator = function(input) {
  if (input[0] === this.commands && this.option.includes(input[1])) {
    this.isValid = true;
  }
};

Commands.prototype.setAction = function(target, somefunctions) {
  const i = this.option.findIndex(value => {
    value === target;
  });
};

function CommandsOptions() {
  this.options = [];
}

CommandsOptions.prototype.add = function(option) {
  const newOption = this.options.slice();
  newOption.push(option);
  this.options = newOption;
};

const transferOption = new CommandsOptions();
transferOption.add("add");
transferOption.add("use");
transferOption.add("purge");

const transfersCommand = new Commands("transfers", transferOption.options);
console.log(transfersCommand);
transfersCommand.validator(["transfers", "add"]);
console.log(transfersCommand);
transfersCommand.setAction("add", "some function");
console.log(transfersCommand.addAction);
