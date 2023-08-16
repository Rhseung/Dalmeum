const { Argument, Command } = require('../../modules/commander');

module.exports = Command(
    aliases = ['핑', 'pong'],
    description = 'ping pong',
    arguments = [
        Argument(String).set('text', 'hello world')
    ],

    execute = (msg) => {
        msg.reply(`${msg.author.name}님, ${msg.args.text}`);
    }
)