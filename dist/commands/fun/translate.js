"use strict";

/**
 * @alias 번역, 파파고
 * @description `text`를 `source` 언어에서 `target` 언어로 번역합니다.
 *
 * @param {string} text - 번역할 텍스트
 * @param {string} source - 원본 언어 코드
 * @param {string} target - 목적 언어 코드
 */
module.exports = function (msg) {
    return [String, function (text) {
        return [String, function (source) {
            return [String, function (target) {
                return msg.reply("translate " + source + " " + target + " " + text);
            }];
        }];
    }];
};