"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLib = exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.setName = function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        this.names = names;
        return this;
    };
    Command.prototype.execute = function (executefn) {
        this.executefn = executefn;
        return this;
    };
    return Command;
}());
exports.Command = Command;
var CommandLib = /** @class */ (function () {
    function CommandLib(dirPath) {
        this.dirPath = dirPath;
        this.cmds = {};
        // TODO - isDirectory, forEachDirectory is not exists...
    }
    CommandLib.prototype.execute = function (intr) {
    };
    return CommandLib;
}());
exports.CommandLib = CommandLib;
