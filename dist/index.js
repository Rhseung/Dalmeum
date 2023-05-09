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
    intr.send(JSON.stringify(intr, null, 4));
    if (intr.content.startsWith('do ')) {
        var data = intr.content.substring(3);
        try {
            intr.send(eval(data));
        }
        catch (e) {
            intr.send(e.toString());
        }
    }
    else if (intr.content.startsWith('add ')) {
        var args = intr.content.substring(4).split(' ').map(Number);
        intr.send("".concat(args.reduce(function (a, b) { return a + b; }, 0)));
    }
}
