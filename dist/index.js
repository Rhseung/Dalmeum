var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function response(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat) {
    if (message.startsWith("/덧셈")) {
        var args = message.substring(4).split(' ').map(Number);
        replier.reply(sum.apply(void 0, __spreadArray([1, 3], args, false))); // /덧셈 1 2 3 4 -> 14
    }
    else if (message.startsWith("/자기소개")) { // /자기소개 류현승 18 4.3
        var args = message.substring(6).split(' ');
        replier.reply("\uC800\uB294 ".concat(args[0], "\uC774\uACE0, ").concat(args[1], "\uC0B4\uC774\uACE0, \uBC14\uB77C\uB294 \uD559\uC810\uC740 ").concat(args[2], "\uC785\uB2C8\uB2E4."));
    }
}
function sum(a, b) {
    if (b === void 0) { b = 3; }
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (a, b) { return a + b; }, 0);
}
