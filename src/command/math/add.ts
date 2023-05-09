import { Command } from '../../modules/command';

export var cmd = new Command()
    .setName('add', 'plus')
    .execute((intr: Interaction, ...numbers: number[]) => {
        return numbers.reduce((a, b) => a + b, 0);
    })