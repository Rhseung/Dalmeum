const { Message, BotManager, Event } = require('d.js');
const { CommandMap } = require('modules/commander');

const bot = BotManager.getCurrentBot();
const cmdMap = new CommandMap('/');

bot.on(Event.MESSAGE, msg => {
    cmdMap
        .register({
            수학: {
                덧셈: [
                    Number, (첫_번째_수) => [
                        Number, (두_번째_수) =>
                            msg.reply(첫_번째_수 + 두_번째_수)
                        , String, (임의_문자열) =>
                            msg.reply('두 번째 수는 숫자여야 합니다.')
                        , () =>
                            msg.reply('두 번째 수를 입력해주세요.')
                    ]
                    , () =>
                        msg.reply('첫 번째 수를 입력해주세요.')
                ]
            }
        })
        .registerDir('commands')
        .build(msg);
});