function response(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat) {
    return onMessage(new Interaction(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat));
}
var Room = /** @class */ (function () {
    function Room(room, isGroupChat) {
        this.name = room;
        this.isGroup = isGroupChat;
    }
    return Room;
}());
var Member = /** @class */ (function () {
    function Member(sender, imageDB) {
        this.name = sender;
        this.image = imageDB;
    }
    Object.defineProperty(Member.prototype, "hash", {
        get: function () {
            return this.image.getProfileHash();
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
var Interaction = /** @class */ (function () {
    function Interaction(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat) {
        this.room = new Room(room, isGroupChat);
        this.content = message;
        this.member = new Member(sender, imageDB);
        this.isDual = isMultiChat;
        this.replier = replier;
        this.packageName = packageName;
    }
    Interaction.prototype.send = function (message) {
        this.replier.reply(message);
    };
    return Interaction;
}());
function onMessage(intr) {
    if (!(intr.isDual && intr.room.name == '닮음 공작소'))
        return;
    var args = intr.content.split(' ');
    var _a = [3, '4', 4], a = _a[0], b = _a[1], c = _a[2];
    intr.send(f(a, b, c));
}
function f(a, b, c) {
    return "".concat(a, " ").concat(b, " ").concat(c);
}
