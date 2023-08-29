class FormatString {
    constructor(format) {
        if (!isString(format)) {
            throw new Error('FormatString must have a formatted string.');
        } else if (!(format.includes('<') && format.includes('>'))) {
            throw new Error('FormatString must have at least one argument.');
        }
        
        const numberAlias = [Number.name, 'number', 'n'];
        const stringAlias = [String.name, 'string', 's'];
        const booleanAlias = [Boolean.name, 'boolean', 'b'];
        
        this.args = [];
        
        let formatted = format;
        numberAlias.forEach(alias => formatted = formatted.replace(alias, '(\\d+)'));
        stringAlias.forEach(alias => formatted = formatted.replace(alias, '(\\w+)'));
        booleanAlias.forEach(alias => formatted = formatted.replace(alias, '(true|false)'));
        
        this.format = new RegExp('^' + formatted + '$');
    }
    
    getArgs(str) {
        // todo: 구현
        //  - str -> '1월 2일'
        //  - format -> /(\d+)월 (\d+)일/
        //  - return -> [1, 2] (형 변환까지)
    }
}

class CommandBranch {
    constructor(type, execute) {
        if (!isString(type) && !isConstructor(type)) {
            throw new Error('CommandBranch must have a type constructor or a formatted string.');
        }
        
        if (isFunction(type) && type.length !== 1) {
            throw new Error('CommandBranch must have a type constructor with one argument.');
        }
        
        if (isString(type)) {
            this.type = new FormatString(type);
        } else {
            this.type = type;
        }
        this.execute = execute;
    }
    
    satisfy(msg) {
        // todo: 구현
    }
    
    execute(msg) {
        let arg = msg.args.shift(); // todo: shift 안 할 거임
        
        // todo: pseudo code
        if (isConstructor(this.type)) {
            try {
                let casted = this.type(arg);
                
                if (is(casted, this.type)) {
                    let runResult = this.execute(msg);
                    if (isArray(runResult)) {
                        return new CommandBranches(runResult).execute(msg);
                    } else {
                        return runResult;
                    }
                } else {
                    throw new Error('CommandBranch type mismatch. Expected ' + this.type.name + ', but got ' + typename(casted) + '.');
                }
            } catch (err) {
                throw new Error('CommandBranch type cast error.');
            }
        } else {    // FormatString
            if (this.execute.length !== this.type.args.length) {
                throw new Error('execute function must have ' + this.type.args.length + ' arguments. (got ' + this.execute.length + ')');
            }
            
            // todo: 여기가 난관임
            let args = [];  // 이 args 가 방금까지 사용한 인자는 모두 제거된 상태임, 즉 args 는 큐임.
            let match = this.type.getArgs(join(slice(args, 0, this.type.args.length), ' '));
            // 대충 이런 느낌 ㅇㅇ
            
            let runResult = this.execute.apply(null, match);
            if (isArray(runResult)) {
                return new CommandBranches(runResult).execute(msg);
            } else {
                return runResult;
            }
        }
    }
}

class DefaultCommand {
    constructor(execute) {
        this.execute = execute;
    }
    
    execute(msg) {
        let runResult = this.execute(msg);
        if (isArray(runResult)) {
            return new CommandBranches(runResult).execute(msg);
        } else {
            return runResult;
        }
    }
}

class CommandBranches {
    /**
     * @param {Array} branch
     */
    constructor(branch) {
        if (!Array.isArray(branch)) {
            throw new Error('CommandBranch must have an array of arguments.');
        }
        
        this.default = null;
        if (branch.length % 2 === 1) {
            this.default = new DefaultCommand(branch.pop());
        }
        
        this.branches = [];
        for (let i = 0; i < branch.length; i += 2) {
            this.branches.push(new CommandBranch(branch[i], branch[i + 1]));
        }
    }
    
    execute(msg) {
        // todo: 각 branch를 순회하면서~ 맞는지 찾고, 찾았으면 그 branch에다가 execute
        //  - 못 찾았으면 default가 있으면 그걸로 execute
        
        let target = null;
        this.branches.forEach(branch => {
            if (branch.satisfy(msg)) {
                target = branch;
                return false;
            }
        });
        
        if (target === null) {
            this.default.execute(msg);
        }
        
        return target.execute(msg);
    }
}

const x = new CommandBranches([
    Number, (첫_번째_수) => [],
    String, (임의_문자열) => [],
    "<number>월 <number>일", (월, 일) => [],
    () => []
]);

console.log(x);

const math = msg => new CommandMap({
    수학: {
        덧셈: [
            Number, (첫_번째_수) => [
                Number, (두_번째_수) =>
                    msg.reply(첫_번째_수 + 두_번째_수)
                , String, (임의_문자열) =>
                    msg.reply('두 번째 수는 숫자여야 합니다.')
                , () =>
                    msg.reply('두 번째 수를 입력해주세요.')
            ]
            , () =>
                msg.reply('첫 번째 수를 입력해주세요.')
        ]
    }
})