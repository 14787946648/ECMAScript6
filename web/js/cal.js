"use strict"

//1、按数值完成相减运算，并进行输出。
function cal(){
    let n1=document.querySelector("#n1").value;
    let n2=document.querySelector("#n2").value;

    let result=Number.parseFloat(n1)-Number.parseFloat(n2);
    document.querySelector("#result").innerHTML=`计算结果是:<span style="color:#ff0033">${result.toFixed(2)}</span>`;
}

//-----------------------------------------------------------------------------------------------------------------------
//2将这两个字符串转换为整数
function toInteger() {
    let n1=document.querySelector("#n1").value;
    let n2=document.querySelector("#n2").value;

    let result3=Number.parseInt(n1);
    let result4=Number.parseInt(n2);

    document.querySelector("#result").innerHTML=`判断结果是:
        <p style="color:red">${n1}------转换为整数---->${result3}</p>
        <p style="color:#06ef0b">${n2}-----转换为整数---->${result4}</p>
    `;
    console.log(result3,result4);

}

//-----------------------------------------------------------------------------------------------------------------------
//3、判断数值20和20.5是否为整数，并输出
function isint() {
    let n3=Number.parseInt(document.querySelector("#n3").value);
    let n4=Number.parseFloat(document.querySelector("#n4").value);

    let result3=Number.isInteger(n3);
    let result4=Number.isInteger(n4);

    document.querySelector("#result1").innerHTML=`判断结果是:
        <p style="color:#fa09f6">${n3}------isInteger---->${result3}</p>
        <p style="color:#06ef0b">${n4}-----isInteger---->${result4}</p>
    `;
}

//-----------------------------------------------------------------------------------------------------------------------
//6、现有整数344，将其保留两位小数并进行输出。
function tofixed() {
    let n6=Number.parseFloat(document.querySelector("#n6").value);
    document.querySelector("#result6").innerHTML=`保留两位小数结果是:<span style="color:#10f608">${n6.toFixed(
        2)}</span>`;
}

//-----------------------------------------------------------------------------------------------------------------------
//7、将344按指数形式显示。
function zhi() {
    let n6_1=Number.parseFloat(document.querySelector("#n6").value);
    document.querySelector("#result6").innerHTML=`${n6_1}的指数形式是:<span style="color:#f61008">${
        n6_1.toExponential(2)}</span>`;
}

//----------------------------------------------------------------------------------------------------------------------
//8、分别判断:true、25、25.4、25.0、null、'23'是否为整数，并进行输出。
function isint1() {
    let n8=document.querySelector("#n8").value;
    let n9=Number.parseInt(document.querySelector("#n9").value);
    let n10=Number.parseFloat(document.querySelector("#n10").value);
    let n11=Number.parseInt(document.querySelector("#n11").value);
    let n12=document.querySelector("#n12").value;
    let n13=Number.parseInt(document.querySelector("#n13").value);


    document.querySelector("#result8").innerHTML=`判断结果是:
        <p style="color:#07fa2f">${n8}------isInteger---->${Number.isInteger(n8)}</p>
        <p style="color:#0ffc07">${n9}------isInteger---->${Number.isInteger(n9)}</p>
        <p style="color:#07f827">${n10}------isInteger---->${Number.isInteger(n10)}</p>
        <p style="color:#04ff4b">${n11}------isInteger---->${Number.isInteger(n11)}</p>
        <p style="color:#02fc1a">${n12}------isInteger---->${Number.isInteger(n12)}</p>
        <p style="color:#06ef0b">${n13}-----isInteger---->${Number.isInteger(n13)}</p>
    `;
}
//----------------------------------------------------------------------------------------------------------------------
//9、NaN含义是什么？
/*
    NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。提示：请使用
isNaN() 全局函数来判断一个值是否是 NaN 值。Number.NaN用来说明某些算术运算（如求负数的平方根）的结果不是数字。方法 parseInt() 和
parseFloat() 在不能解析指定的字符串时就返回这个值。对于一些常规情况下返回有效数字的函数，也可以采用这种方法，用 Number.NaN 说明它
的错误情况。
JavaScript 以 NaN 的形式输出 Number.NaN。请注意，NaN 与其他数值进行比较的结果总是不相等的，包括它自身在内。因此，不能与 Number.
NaN 比较来检测一个值是不是数字，而只能调用 isNaN() 来比较。
在 ECMAScript v1 和其后的版本中，还可以用预定义的全局属性 NaN 代替 Number.NaN。

*/