/**
 * @name <완벽한 `command handler` 가 가져야 할 덕목>
 *
 * todo:
 *  - 명령어 인자에 대한 완벽한 세팅
 *      - 단순한 인자 나열을 나타낼 수 있는가?
 *          - ex) `명령어 <가> <나> <다> <라> <마> <바> <사> <아> <자> <차> <카> <타> <파> <하>`
 *      - 가변 인자가 가능한가?
 *          - ex) `명령어 <...가>`
 *      - 선택적 인자가 가능한가?
 *          - ex) `명령어 <가='ga'>
 *      - 인자의 타입을 지정할 수 있는가?
 *          - ex) `명령어 <가:string>`
 *  - 명령어 구조에 관한 완벽한 세팅
 *      - 다중 명령어가 가능한가?
 *          - ex) `명령어1 명령어2 명령어3 <가> <나>`
 *  - 명령어 확장성에 대한 완벽한 세팅
 *  - 명령어 속성에 대한 완벽한 세팅
 *  - 확장성
 *  - 코드가 이쁜가?
 *  - 디렉토리형 명령어 나열을 지원하는가?
 */

/**
 * @idea 1
 *
 * # 장점
 * - 기존의 command handler 에서 msg 객체를 앞으로 빼면서 매개변수를 줄일 수 있음
 * - ES6의 엘레강스한 문법을 최대한 활용해 선택 인자와 가변 인자가 자동 구현
 *
 * # 단점
 * - 그래서 타입 설정은?
 */

// const cmd = msg => { return {
//     util: {
//         translate: (from, to, text) => {
//             msg.reply(`translate ${from} ${to} ${text}`)
//         }
//     }
// }}
//
// class TypedCommand {
//     constructor(desc, execute) {
//         this.desc = desc;
//         this.execute = execute;
//     }
// }
//
// function command(description) {
//     return function (execute) {
//         return new TypedCommand(description, execute);
//     }
// }
//
// /**
//  * @idea 2
//  *
//  * # 장점
//  * - 문자열로서 모든 명령어 템플릿을 다 구현함
//  * - 개이쁨
//  *
//  * # 단점
//  * - js의 로우 레벨 느낌을 완전 버림
//  * - 매번 커맨드 변수를 추가한 후 뒤에 달아야하는게 여간 귀찮음
//  */
// idea2 = () => {
//     const util = root.command('util');
//     const math = root.command('math');
//
//     const translate = util.command('translate');
//
//     let a = `명령어 <가:number> <나:number> <다:number> <라:number> <text:string> <바:string> <사:string> <아:boolean>`;
//
//     translate('번역 <text:number> <from:string> <to:string>', (msg, args) => {
//         msg.reply('번역 결과');
//     });
//
//     ping = util.command('ping');
//     ping((msg, args) => {
//         msg.reply('pong');
//     });
//
//     add = math.command('add');
//     add('덧셈 <numbers>', (msg, args) => {
//         msg.reply(args['numbers'].reduce((acc, cur) => acc + cur));
//     });
// }
//
// /**
//  * @idea 3
//  *
//  * # 장점
//  * - ㅇㅇ
//  *
//  * # 단점
//  * - ㅇㅇ
//  */
// idea3 = () => {
//     "util".group(
//         "translate <from:string> <to:string> <text:string>".cmd(msg => {
//
//         })
//     )
//
//     math = $.group("math")
//
//     "math".group(
//         "add".cmd((msg, numbers) => {
//             msg.reply(numbers.reduce((acc, cur) => acc + cur));
//         }),
//         "subtract".cmd((msg, numbers) => {
//             msg.reply(numbers.reduce((acc, cur) => acc - cur));
//         }),
//     );
// }
//
// /**
//  * @idea 4
//  *
//  * # 장점
//  * - ㅇㅇ
//  *
//  * # 단점
//  * - ㅇㅇ
//  */
// idea4 = (dalmeum) => {
//     dalmeum.command.builder(_ => _
//         .group('util', _ => _
//             .command('translate <from:string> <to:string> <text:string>', (msg, from, to, text) => {
//                 msg.reply('번역 결과');
//             })
//         )
//     )
//
//     @command('translate <from:string> <to:string> <text:string>')
//     function translate(msg, from, to, text) {
//
//     }
// }
//
// /**
//  * @idea 5
//  */
idea5 = (dalmeum) => {
    dalmeum.got().message().separate().feed().get().meaning().answer();

    dalmeum.when().get('안녕').answer('안녕하세요');
    dalmeum.when().get('안녕').or().get('하이').answer('안녕하세요');
    dalmeum.when().get('안녕').or().get('하이').or().get('ㅎㅇ').answer('안녕하세요');
}
//
// /**
//  * @idea 6, 고전
//  *
//  *
//  */
// ping = new TypedCommand(cmd => cmd
//     .setDescription('ping 명령어')
//     .run(msg => {
//         msg.reply('pong');
//     })
// )
//
// translate = new TypedCommand('translate')
//     .setDescription('번역 명령어')
//     .addArgument(String, source => new TypedCommand('source')
//         .setDescription('번역할 언어')
//         .addArgument(String, target => new TypedCommand('target')
//             .setDescription('번역될 언어')
//             .addArgument(String, text => new TypedCommand('text')
//                 .setDescription('번역할 문장')
//                 .run(`translate ${source} ${target} ${text}`)
//             )
//         )
//     )

/**
 * @idea 7
 */

// /util translate 한국어 영어 이거 번역해봐
const commands = msg => { return {
    공부인증: [
        ({ string: 이름 }, description="이름을 의미합니다.") => [
            ({ string: 날짜 }) => [
                ({ number: 시간 }) => [
                    내용 => {
                        msg.reply(`공부인증 ${이름} ${날짜} ${시간} ${내용}`)
                    },
                    () => {
                        msg.reply('내용을 입력하지 않았습니다.')
                    }
                ],
                () => {
                    msg.reply('시간을 입력하지 않았습니다.')
                }
            ]
        ]
    ],


}}

idea7 = () => {
    const ret = msg => {
        return {
            util: {
                translate: (
                    string(from => (
                        string(to => (
                            string(text => {
                                msg.reply(`translate ${from} ${to} ${text}`)
                            })
                        ))
                    ))
                )
            }
        }
    }
}

/**
 * @idea 8
 *
 * # 장점
 * - 이거다
 *
 * # 단점
 * - 거의 없음
 *
 * # 보완점
 * todo:
 *  -
 */
const command = msg => ({
    수학: {
        덧셈: [
            Number, (첫_번째_수) => [
                Number, (두_번째_수) =>
                    msg.reply(첫_번째_수 + 두_번째_수)
                ,String, (임의_문자열) =>
                    msg.reply('두 번째 수는 숫자여야 합니다.')
                ,() =>
                    msg.reply('두 번째 수를 입력해주세요.')
            ]
            ,() =>
                msg.reply('첫 번째 수를 입력해주세요.')
        ]
    },

    // /유틸 번역 en ko hello world
    유틸: {
        번역: [
            String, (from) => [
                String, (to) => [
                    String, (text) => {
                        msg.reply(`translate ${from} ${to} ${text}`)
                    }
                    ,() =>
                        msg.reply('번역할 문장을 입력해주세요.')
                ]
                ,() =>
                    msg.reply('번역될 언어를 입력해주세요.')
            ]
        ]
    },

    시간표: [
        "<Number>월 <Number>일", (월, 일) => [
            // 같은 코드?
        ],
        String, (날짜) => [
            // 비어있는 인자를 받는다는게 그냥 인자가 없는 거랑 구분할 수가 없음
            //  - 정확히 말하자면 a=
            "@<String>", function ( ) {
                타겟 = arguments[0] || msg.author;
                // 타겟의 시간표를 보여줌
            }
        ]
    ]
});



msg = null
let now = command(msg)['수학']['덧셈'];
let args = [1, 2];



while (args.length > 0) {
    if (Array.isArray(now)) {
        now.forEach(f => {
            let 인자개수 = f.length;
            let 인자타입 = null;

            f(args[0])
        })
    }
}