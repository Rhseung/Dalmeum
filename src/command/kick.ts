import { Command } from "../modules/command";

export var cmd = new Command()
    .setName('kick')
    .execute((intr: Interaction, user: string, reason: string = 'default') => `${user}님을 강퇴합니다. 사유: ${reason}`)