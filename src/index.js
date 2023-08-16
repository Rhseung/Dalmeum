const { BotManager, Event } = require('d.js');

const bot = BotManager.getCurrentBot();
bot.setCommandPrefix('@');

bot.on(Event.COMMAND, (msg) => {
   msg.reply('hello world');
});

async function main() {
    return await new Promise(31);
}

const commands = {
   add: (...numbers) => {
      return numbers.reduce((a, b) => a + b);
   },

   translate(text, source='ko', target='en') {
      return `translate ${text} from ${source} to ${target}`;
   }
}