"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var command_1 = require("../../modules/command");
exports.cmd = new command_1.Command()
    .setName('add', 'plus')
    .execute(function (intr) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
});
