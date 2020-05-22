"use strict";

function Execute(op) {
    let str = "Hello,ES6";
    switch (op) {
        case "1":
            document.querySelector("#show01").innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: #cd06fa">
            ${str.substr(0, 5)}-------------->
            ${str.substr(0, 5).split("").reverse().join('')}</span>`;
            break;
        case "2":
            document.querySelector("#show02").innerHTML = `<span style="color: #cd06fa">
            &nbsp&nbsp&nbsp&nbsp&nbsp ${str}-------------->${str.toUpperCase()}</span>`;
            break;
        case '3':
            document.querySelector("#show03").innerHTML = ` <span style="color: #cd06fa">
            ${str}--->${str.substr(2, 4)} </span>`;
            break;
        case '4':
            document.querySelector("#show04").innerHTML = `<span style="color: #cd06fa">
            &nbsp&nbsp&nbsp&nbsp&nbsp ${str}-------------->${str.replace("ES6", "JavaScript")}</span>`;
            break;
        case '5':
            document.querySelector("#show05").innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: #cd06fa">
            ${str}-------------->${str.substr(3, 1)} </span>`;
            break;
        case '6':
            document.querySelector("#show06").innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: #cd06fa">
            ${str}-------------->index=${str.lastIndexOf("l")} </span>`;
            break;
        case '7':
            document.querySelector("#show07").innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: #cd06fa">
            ${str}-------------->${str.startsWith("He")} </span>`;
            break;
        case '8':
            document.querySelector("#show08").innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: #cd06fa">
            ${str}-------------->${str.endsWith("ES6")} </span>`;
            break;
        case '9':
            document.querySelector("#show09").innerHTML = `<span style="color: #cd06fa">
            ${str}-->${str.repeat(3)} </span>`;
            break;
        case '10':
            document.querySelector("#show10").innerHTML = `<span style="color: #cd06fa">
            ${str}-->${str.padStart(12, "*")} </span>`;
            break;
        case '11':
            document.querySelector("#show11").innerHTML = `<span style="color: #cd06fa">
            ${str}-->${str.padEnd(12, "@")} </span>`;
            break;
        case '12':
            document.querySelector("#container").style.display = "none";
            document.querySelector("#container2").style.display = "block";
            break;
    }
}

//---------------------------------------------------------------------------------------------------------------------
function calculate(mark) {

    if (Number.isInteger(Number.parseFloat(document.querySelector("#first_Txt").value.trim())) &&
        Number.isInteger(Number.parseInt(document.querySelector(
        "#last_Txt").value.trim()))) {
        switch (mark) {
            case'1':
                document.querySelector("#result").innerHTML = `<span style="color:#ff0033">${Number.parseFloat(
                    document.querySelector("#first_Txt").value.trim()) + Number.parseInt(document.querySelector(
                    "#last_Txt").value.trim())}</span>`;

                break;
            case'2':
                document.querySelector("#result").innerHTML = `<span style="color:#ff0033">${Number.parseFloat(
                    document.querySelector("#first_Txt").value.trim()) - Number.parseInt(document.querySelector(
                    "#last_Txt").value.trim())}</span>`;
                break;
            case'3':
                document.querySelector("#result").innerHTML = `<span style="color:#ff0033">${Number.parseFloat(
                    document.querySelector("#first_Txt").value.trim()) * Number.parseInt(document.querySelector(
                    "#last_Txt").value.trim())}</span>`;
                break;
            case'4':
                document.querySelector("#result").innerHTML = `<span style="color:#ff0033">${Number.parseFloat(
                    document.querySelector("#first_Txt").value.trim()) / Number.parseInt(document.querySelector(
                    "#last_Txt").value.trim())}</span>`;
                break;
        }

    } else {
        document.querySelector("#result").innerHTML = `<span style="color:#ff0033"><em>
        数据不符，请重新输入！</em></span>`;
    }

}