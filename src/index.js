const { Message, BotManager, Event } = require('d.js');
const { CommandMap } = require('modules/commander');

const bot = BotManager.getCurrentBot();
const cmdMap = new CommandMap('/');

bot.on(Event.MESSAGE, msg => {
    cmdMap.build(msg);


});