const { sayBela } = require("./bela");
const { sayCartoleta } = require("./cartoleta");
const { sayDocinho } = require("./docinho");
const { sayCoach } = require("./coach");
const { sayHi } = require("./hi");
const { sayLinda } = require("./linda");
const { sayHelp } = require("./tools/help");

function saySomething(args) {
  switch (args.shift().toLowerCase()) {
    case 'oi': return sayHi(args);
    case 'linda': return sayLinda(args);
    case 'bela': return sayBela(args);
    case 'docinho': return sayDocinho(args);
    case 'cartoleta': return sayCartoleta(args);
    case 'coach': return sayCoach(args);
    case 'help': return sayHelp();
    default:
      break;
  }
}

module.exports = { saySomething };