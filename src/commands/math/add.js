const { Argument, TypedCommand } = require('../../modules/commander');

module.exports = Command(
    aliases = ['덧셈'],
    description = '덧셈하는 명령어',
    arguments = [
        Argument(Array(Number)).set(name='numbers')
    ],

    execute = msg => {
        let numbers = msg.args.numbers;
        msg.reply(numbers.reduce((acc, cur) => acc + cur));
    }
)