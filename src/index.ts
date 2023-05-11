function response(room: string, message: string, sender: string, isGroupChat: boolean, replier: Replier, imageDB: ImageDB, packageName: string, isMultiChat: boolean): void {
    return onMessage(new Interaction(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat));
}

class Room {
    name: string;
    isGroup: boolean;

    constructor(room: string, isGroupChat: boolean) {
        this.name = room;
        this.isGroup = isGroupChat;
    }
}

class Member {
    name: string;
    private image: ImageDB;

    constructor(sender: string, imageDB: ImageDB) {
        this.name = sender;
        this.image = imageDB;
    }

    get hash(): number {
        return this.image.getProfileHash();
    }
}

class Interaction {
    room: Room;
    content: string;
    member: Member;
    isDual: boolean;
    private replier: Replier;
    packageName: string;

    constructor(room: string, message: string, sender: string, isGroupChat: boolean, replier: Replier, imageDB: ImageDB, packageName: string, isMultiChat: boolean) {
        this.room = new Room(room, isGroupChat);
        this.content = message;
        this.member = new Member(sender, imageDB);
        this.isDual = isMultiChat;
        this.replier = replier;
        this.packageName = packageName;
    }

    send(message: string): void {
        this.replier.reply(message);
    }
}

function onMessage(intr: Interaction): void {
    if (!(intr.isDual && intr.room.name == '닮음 공작소')) return;

    let args = intr.content.split(' ');
    intr.send('hello world');
}