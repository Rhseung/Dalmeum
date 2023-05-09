export class Command {
    names: string[];
    executefn: (...params: any[]) => any;

    constructor() {}

    setName(...names: string[]) {
        this.names = names;
        return this;
    }

    execute(executefn: (...params: any[]) => any) {
        this.executefn = executefn;
        return this;
    }
}

export class CommandLib {
    private dirPath: string;
    cmds: object;

    constructor(dirPath) {
        this.dirPath = dirPath;
        this.cmds = {};

        // TODO - isDirectory, forEachDirectory is not exists...
    }

    execute(intr: Interaction) {

    }
}