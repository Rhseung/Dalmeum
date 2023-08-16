'use strict';

var _require = require('d.js'),
    BotManager = _require.BotManager,
    Event = _require.Event;

var bot = BotManager.getCurrentBot();
bot.setCommandPrefix('@');

bot.on(Event.COMMAND, function (msg) {
   msg.reply('hello world');
});

async function main() {
   return await new Promise(31);
}

var commands = {
   add: function add() {
      for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
         numbers[_key] = arguments[_key];
      }

      return numbers.reduce(function (a, b) {
         return a + b;
      });
   },

   translate: function translate(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ko';
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

      return 'translate ' + text + ' from ' + source + ' to ' + target;
   }
};