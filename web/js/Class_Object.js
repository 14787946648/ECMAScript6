"use strict";
/*
* 1、模拟简单的计算器。
* 定义名为Calculator的类，其中有两个数字类型的成员n1和n2。在构造方法，赋予n1和n2初始值，
* 再为该类定义加（addition）、减（subtration）、乘（multiplication）、除（division）
* 等公有成员方法，分别对两个成员变量执行加、减、乘、除的运算。创建Number类的对象，调
* 用各个方法，并显示计算结果。
*
* */
let first_Number, last_Number, result, userId, userPassword, email, user;

//定义计算器类
class Calculators {
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }

    get num1() {
        return this._num1;
    }

    set num1(value) {
        this._num1 = value;
    }

    get num2() {
        return this._num2;
    }

    set num2(value) {
        this._num2 = value;
    }

    //Method
    addition() {
        result = sum(this._num1, this._num2);
        return result;
    }

    subtraction() {
        result = this._num1 - this._num2;
        return result;
    }

    multiplication() {
        result = this._num1 * this._num2;
        return result;
    }

    division() {
        result = this._num1 / this._num2;
        return result;
    }
}

//判断输入内容是否合法
function mouse_Num1() {
    if (/(^[\-0-9][0-9]*(.[0-9]+)?)$/.test(document.querySelector("#first_Number").value.trim())) {
        document.querySelector("#output").innerHTML = ``;
        return true;
    } else {
        document.querySelector("#output").innerHTML = `Number One不合法！`;
    }
}

//判断输入内容是否合法(再次判断第一个数是否合法以排除第一个数非法未修改情况)
function mouse_Num2() {
    if (/(^[\-0-9][0-9]*(.[0-9]+)?)$/.test(document.querySelector("#last_Number").value.trim())) {
        document.querySelector("#output").innerHTML = ``;
        mouse_Num1();
        return true;
    } else {
        document.querySelector("#output").innerHTML = `Number Two不合法！`;
    }
}

//执行按钮事件（计算结果）
function calculate(tmp) {
    //确定数据合法才能读取数据和触发按钮
    if ((mouse_Num2() && mouse_Num1())) {
        first_Number = document.querySelector("#first_Number").value.trim();
        last_Number = document.querySelector("#last_Number").value.trim();

        //实例化Calculator类
        let calculator = new Calculators(first_Number, last_Number);
        switch (tmp) {
            case 1:
                document.querySelector("#output").innerHTML = `<h3>${calculator.addition().toFixed(2)}</h3>`;
                break;
            case 2:
                document.querySelector("#output").innerHTML = `<h3>${calculator.subtraction().toFixed(2)}</h3>`;
                break;
            case 3:
                document.querySelector("#output").innerHTML = `<h3>${calculator.multiplication().toFixed(2)}</h3>`;
                break;
            case 4:
                document.querySelector("#output").innerHTML = `<h3>${calculator.division().toFixed(2)}</h3>`;
                break;
        }
    }
}

//供Calculators类调用以解决加法运算字符串拼接的问题
function sum(a, b) {
    let i = Number.parseFloat(a);
    let j = Number.parseFloat(b);
    return i + j;
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------
*
* 2、定义一个网络用户类（User），要处理的信息有用户ID、用户密码、email地址。在建立类
* 的实例时，把以上三个信息都作为构造函数的参数输入，其中用户ID和用户密码是必须的，缺
* 省的email地址是用户ID加上字符串"@gameschool.com"
*
* */

//定义User类
class User {
    constructor(uId, uPassword, uEmail) {
        this._uId = uId;
        this._uPassword = uPassword;
        this._uEmail = uEmail;
    }

    get uId() {
        return this._uId;
    }

    set uId(value) {
        this._uId = value;
    }

    get uPassword() {
        return this._uPassword;
    }

    set uPassword(value) {
        this._uPassword = value;
    }

    get uEmail() {
        return this._uEmail;
    }

    set uEmail(value) {
        this._uEmail = value;
    }

    show() {
        return `id=<span style="color: #ff0909">${this._uId}</span><br/>password=<span style="color: #ff0909">
${this._uPassword}</span><br/>email=<span style="color: #ff0909">${this._uEmail}</span>`;
    }
}

/*
* 要求：
* 根据输入信息获取userId、userPassword、email，
* 并实例化User类
* */
//执行按钮单击事件
function landing() {
    if (input_UserId() && input_UserPassword()) {
        userId = document.querySelector("#input_ID").value.trim();
        userPassword = document.querySelector("#input_Password").value.trim();
        //检查email && /^\w{4,16}@gameschool.com$/.test
        //         (document.querySelector("#input_Email").value.trim())
        if (document.querySelector("#input_Email").value.trim() != '') {
            email = document.querySelector("#input_Email").value.trim();
        } else {
            email = `${userId}@gameschool.com`;
        }

        //实例化User类
        user = new User(userId, userPassword, email);
        document.querySelector("#result2").innerHTML = `${user.show()}`
    } else {
        input_UserId();
        input_UserPassword();
    }

}

//检查id
function input_UserId() {
    // && /\d{4,16}/.test(document.querySelector("#input_ID").value.trim())
    if (document.querySelector("#input_ID").value.trim() != '') {
        return true;
    } else if (document.querySelector("#input_ID").value.trim() == '') {
        document.querySelector("#s1").innerHTML = `请输入你的id！`
    }
}

//检查密码
function input_UserPassword() {
    //&& /^[A-Z]\w{7,15}$/.test(document.querySelector("#input_Password").value.trim())
    if (document.querySelector("#input_Password").value.trim() != '') {
        return true;
    } else if (document.querySelector("#input_Password").value.trim() == '') {
        document.querySelector("#s2").innerHTML = `请输入你的密码！`
    }
}