/**
 * @alias 핑, pong
 * @description 핑을 보냅니다.
 */
module.exports = msg => [
    () => msg.reply('pong!')
]