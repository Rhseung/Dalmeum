/**
 * todo: 생각 모음
 *  - 공백이 있는 문자열 처리 -> powershell 에서처럼 문자열 리터럴 표시 ", ' 를 사용해서 구분해주기
 *  -
 */

function isConstructor(obj) {
    return !!obj.prototype && !!obj.prototype.constructor.name;
}

export class commander {
    constructor() {
        this.name = 'commander';
    }

    execute() {
        console.log('commander executed');
    }
}

export class Int extends Number {
    constructor(n) {
        if (parseFloat(n) % 1 !== 0) {
            throw new Error('Int must be an integer');
        }

        super(n);
    }
}

export function Argument(type) {
    if (!isConstructor(type)) {
        throw new Error('Argument type must be a constructor');
    }

    switch (type) {
        case String:
            return new StringArgument();
        case Int:
            return new IntArgument();
        case Number:
            return new NumberArgument();
        case Boolean:
            return new BooleanArgument();
        case Array:
            return new ArrayArgument(type);
        default:
            return new TypedArgument(type);
    }
}

class TypedArgument {
    constructor(type) {
        if (!isConstructor(type)) {
            throw new Error('Argument type must be a constructor');
        }

        this.type = type;
        this.name = null;
        this.defaultValue = null;
    }

    set(name, defaultValue = null) {
        if (name.constructor !== String) {
            throw new Error('Argument name must be a String');
        }

        if (defaultValue != null && defaultValue.constructor !== this.type) {
            throw new Error('Argument defaultValue must be the same type as the argument');
        }

        this.name = name;
        this.defaultValue = defaultValue;

        return this;
    }

    is(obj) {
        return obj.constructor === this.type;
    }

    toString() {
        return `${this.name}: ${this.type.name}${this.defaultValue ? ` = ${this.defaultValue}` : ''}`;
    }
}

class IntArgument extends TypedArgument {
    constructor() {
        super(Int);
    }

    set(name, defaultValue = null, minValue = null, maxValue = null) {
        super.set(name, defaultValue);

        if (minValue != null && (minValue.constructor !== Number && minValue.constructor !== Int)) {
            throw new Error('NumberArgument minValue must be a Number');
        }
        if (maxValue != null && (maxValue.constructor !== Number && maxValue.constructor !== Int)) {
            throw new Error('NumberArgument maxValue must be a Number');
        }

        this.minValue = minValue ? new Int(minValue) : minValue;
        this.maxValue = maxValue ? new Int(maxValue) : maxValue;

        return this;
    }
}

class NumberArgument extends TypedArgument {
    constructor() {
        super(Number);
    }

    set(name, defaultValue = null, minValue = null, maxValue = null) {
        super.set(name, defaultValue);

        if (minValue != null && minValue.constructor !== Number) {
            throw new Error('NumberArgument minValue must be a Number');
        }
        if (maxValue != null && maxValue.constructor !== Number) {
            throw new Error('NumberArgument maxValue must be a Number');
        }

        this.minValue = minValue;
        this.maxValue = maxValue;

        return this;
    }
}

class StringArgument extends TypedArgument {
    constructor() {
        super(String);
    }

    set(name, defaultValue = null, minLength = null, maxLength = null) {
        super.set(name, defaultValue);

        if (minLength != null && (minLength.constructor !== Number && minLength.constructor !== Int)) {
            throw new Error('NumberArgument minLength must be a Number');
        }
        if (maxLength != null && (maxLength.constructor !== Number && maxLength.constructor !== Int)) {
            throw new Error('NumberArgument maxLength must be a Number');
        }

        this.minLength = minLength ? new Int(minLength) : minLength;
        this.maxLength = maxLength ? new Int(maxLength) : maxLength;

        return this;
    }
}

class BooleanArgument extends TypedArgument {
    constructor() {
        super(Boolean);
    }
}

class ArrayArgument extends TypedArgument {
    constructor(type) {
        if (!type.every(isConstructor)) {
            throw new Error('ArrayArgument type must be an array of constructors');
        }

        super(Array);
        this.types = type;
    }

    set(name) {
        if (name.constructor !== String) {
            throw new Error('Argument name must be a String');
        }

        this.name = name;

        return this;
    }

    is(obj) {
        return this.types.includes(obj.constructor);
    }

    toString() {
        return `${this.name}: Array<${this.types.map(e => e.name).join('|')}>${this.defaultValue ? ` = ${this.defaultValue}` : ''}`;
    }
}