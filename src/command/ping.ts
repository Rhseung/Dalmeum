import { Command } from "../modules/command";

export var cmd = new Command()
    .setName('ping')
    .execute((intr: Interaction) => {
        let timestamp = Date.now();
        intr.send('pong');
        intr.send(`${(Date.now() - timestamp)}ms`)
    })