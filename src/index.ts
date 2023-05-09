function response(room: string, message: string, sender: string, isGroupChat: boolean, replier: Replier, imageDB: ImageDB, packageName: string, isMultiChat: boolean): void {
    if (message.startsWith("/덧셈")) {
        let args: number[] = message.substring(4).split(' ').map(Number);

        replier.reply(sum(1, 3, ...args));  // /덧셈 1 2 3 4 -> 14
    } else if (message.startsWith("/자기소개")) {   // /자기소개 류현승 18 4.3
        let args = message.substring(6).split(' ');

        replier.reply(`저는 ${args[0]}이고, ${args[1]}살이고, 바라는 학점은 ${args[2]}입니다.`);
    }
}

class Interation {
    constructor(room: string, message: string, sender: string, isGroupChat: boolean, replier: Replier, imageDB: ImageDB, packageName: string, isMultiChat: boolean) {
        this.
    }
}

function sum(a: number, b: number = 3, ...c: number[]): number {
    return a + b + c.reduce((a, b) => a + b, 0);
}