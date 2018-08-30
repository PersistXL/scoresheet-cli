let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    it('选择 1 ，输出如下要求', function () {
        var number = 1;
        var result = main(number);
        expect(result).toEqual('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    })

    it('输入格式不正确，返回如下', function () {
        var information = 'Tom,17610303153129,98'
        var result = main(information);
        expect(result).toEqual('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
    })

    it('输入格式正确，返回如下', function () {
        var information = 'Tom,17610303153129,数学，98'
        var result = main(information);
        expect(result).toEqual('学生Tom的成绩被添加');
    
    });


    it('选择 2 ，输出如下要求', function () {
        var number = 2;
        var result = main(number);
        expect(result).toEqual('请输入要打印的学生的学号（格式： 学号, 学号, ...），按回车提交：');
    })

    it('输入格式不正确，返回如下', function () {
        var information = 'Tom,17610303153129'
        var result = main(information);
        expect(result).toEqual('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号, ...），按回车提交：');
    })

    it('输入格式正确，返回如下', function () {
        var information = '17610303153129'
        var r = `成绩单
        姓名 | 数学 | 语文 | 英语 | 编程 | 平均分 | 总分
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
========================
全班总分平均数：xxx
全班总分中位数：xxx`
        var result = main(information);
        expect(result).toEqual(r);

    });

    it('返回主界面', function () {
        var result = main();
        expect(result).toEqual(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

    });

  
});
