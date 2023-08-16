const { Argument, Command } = require('../../modules/commander');

module.exports = Command(
    aliases = ['번역'],
    description = '번역하는 명령어',
    arguments = [
        Argument(String).set('source'),
        Argument(String).set('target'),
        Argument(String).set('text')
    ],

    execute = (msg) => {
        msg.reply(`${msg.author.name}님, ${msg.args.text}`);
    }
)