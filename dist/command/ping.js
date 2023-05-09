"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var command_1 = require("../modules/command");
exports.cmd = new command_1.Command()
    .setName('ping')
    .execute(function (intr) {
    var timestamp = Date.now();
    intr.send('pong');
    intr.send("".concat((Date.now() - timestamp), "ms"));
});
