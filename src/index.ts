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

    intr.send(JSON.stringify(intr, null, 4));

    if (intr.content.startsWith('do ')) {
        let data = intr.content.substring(3);

        try {
            intr.send(eval(data));
        } catch (e) {
            intr.send(e.toString());
        }
    } else if (intr.content.startsWith('add ')) {
        let args: number[] = intr.content.substring(4).split(' ').map(Number);

        intr.send(`${args.reduce((a, b) => a + b, 0)}`);
    }
}