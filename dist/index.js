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
var Message = /** @class */ (function () {
    function Message(message, sender, imageDB) {
        this.content = message;
        this.member = new Member(sender, imageDB);
    }
    return Message;
}());
var Interaction = /** @class */ (function () {
    function Interaction(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat) {
        this.room = new Room(room, isGroupChat);
        this.message = message;
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
    if (!intr.isDual)
        return;
    if (intr.message.startsWith('do ')) {
        var data = intr.message.substring(3);
        try {
            intr.send(eval(data));
        }
        catch (e) {
            intr.send(e.toString());
        }
    }
}
