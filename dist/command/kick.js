"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var command_1 = require("../modules/command");
exports.cmd = new command_1.Command()
    .setName('kick')
    .execute(function (intr, user, reason) {
    if (reason === void 0) { reason = 'default'; }
    return "".concat(user, "\uB2D8\uC744 \uAC15\uD1F4\uD569\uB2C8\uB2E4. \uC0AC\uC720: ").concat(reason);
});
