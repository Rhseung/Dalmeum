function response(room: string, message: string, sender: string, isGroupChat: boolean, replier: Replier, imageDB: ImageDB, packageName: string, isMultiChat: boolean): void {
    return onMessage(new Interaction(room, message, sender, isGroupChat, replier, imageDB, packageName, isMultiChat));
}

function onMessage(intr: Interaction): void {
    if (!intr.isDual) return

    if (intr.content.startsWith('do ')) {
        let data = intr.content.substring(3);

        try {
            intr.send(eval(data));
        } catch (e) {
            intr.send(e.toString());
        }
    }
}