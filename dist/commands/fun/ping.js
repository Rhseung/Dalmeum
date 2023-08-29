'use strict';

/**
 * @alias 핑, pong
 * @description 핑을 보냅니다.
 */
module.exports = function (msg) {
  return [function () {
    return msg.reply('pong!');
  }];
};