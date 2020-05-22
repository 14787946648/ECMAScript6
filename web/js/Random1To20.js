"use strict"

//定义array
let array = [];

for (let a = 0; a < 10; a++) {
    array.push(Math.floor(Math.random() * 20 + 1));
}
let array1 = [...array];

//输出array
document.querySelector("#array").innerHTML = `<p></p>array[ ]=[ ${array} ]`

function Execute(op) {

    let max = array[0], min = array[0], oddNumber_Index = [], even_Index = [], sum = 0, newArray = [], tempArray = [],
        count = 0, ran_Num, index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        } else if (array[i] <= min) {
            min = array[i];
        }

        if (i % 2 != 0) {
            oddNumber_Index.push(array[i]);
        } else if (i % 2 == 0) {
            even_Index.push(array[i]);
        }

        sum += array[i];
    }
    switch (op) {
        case "1":
            document.querySelector("#show01").innerHTML = `<em style="color: red">max=${max}&nbsp&nbsp&nbsp
            ------&nbsp&nbsp&nbsp min=${min}</em>`;
            max = array[0], min = array[0];
            break;
        case "2":
            document.querySelector("#show02").innerHTML = `<em style="color: red">sum=${sum}</em>`;
            sum = 0;
            break;
        case '3':
            document.querySelector("#show03").innerHTML = `<em style="color: red">oddNumber_Index[ ]=[ ${oddNumber_Index} ]</em>`;
            oddNumber_Index = [];
            break;
        case '4':
            document.querySelector("#show04").innerHTML = `<em style="color: red"> even_Index[ ]=[ ${even_Index} ]</em>`;
            even_Index = [];
            break;
        case '5':
            ran_Num = Math.floor(Math.random() * 20 + 1);
            for (let i = 0; i < array.length; i++) {
                if (ran_Num == array[i]) {
                    tempArray = [...array];
                    count++;
                }
            }
            for (let i = 0; i < tempArray.length; i++) {
                if (ran_Num != tempArray[i]) {
                    newArray.push(tempArray[i])
                }
            }

            if (count == 0) {
                document.querySelector("#show05").innerHTML = `<em style="color: red"> ran_Num
                  =${ran_Num}&nbsp&nbsp 不满足：ran_Num==array[index]</em>`;
            } else {
                document.querySelector("#show05").innerHTML = `<em style="color: red"> ran_Num
                            =${ran_Num}&nbsp&nbsp-------&nbsp&nbsp newArray[ ]=[ ${newArray} ]</em>`;
            }

            newArray = [], tempArray = [], count = 0;
            break;
        case '6':
            ran_Num = Math.floor(Math.random() * 20 + 1);

            for (let i = 0; i < array.length; i++) {
                if (ran_Num == array[i]) {
                    tempArray = [...array];
                    count++;
                    array = [];
                }
            }
            for (let i = 0; i < tempArray.length; i++) {
                if (ran_Num != tempArray[i]) {
                    array.push(tempArray[i])
                }
            }

            if (count == 0) {
                document.querySelector("#show06").innerHTML = `<em style="color: red"> ran_Num
                  =${ran_Num}&nbsp&nbsp 不满足：ran_Num==array[index]</em>`;
            } else {
                document.querySelector("#show06").innerHTML = `<em style="color: red"> ran_Num
                            =${ran_Num}&nbsp&nbsp-------&nbsp&nbsp array[ ]=[ ${array} ]</em>`;
            }

            tempArray = [];
            array = [...array1];
            break;
        case '7':
            let a = array.pop();
            let pop_Array = [...array];
            document.querySelector("#show07").innerHTML = `<em style="color: red">删除了Value=${a}的元素&nbsp&nbsp------&nbsp&nbsp
                pop_Array[ ]=[ ${pop_Array} ]
            </em>`;
            break;
        case '8':
            let b = array.shift();
            let shift_Array = [...array];
            document.querySelector("#show08").innerHTML = `<em style="color: red">删除了Value=${b}的元素&nbsp&nbsp------&nbsp&nbsp
                pop_Array[ ]=[ ${shift_Array} ]
            </em>`;
            break;
        case '9':
            document.querySelector("#show09").innerHTML = `<em style="color: red">array[ ]中重复的元素:<em/>`;
            let array_01 = [];
            let arrays = array.sort(Sort);

            for (let i = 0; i <= arrays.length - 1; i++) {
                if (arrays[i] == arrays[i + 1]) {
                    array_01.push(i);
                }
            }
            if (arrays.length != 0) {
                for (let i = 0; i < array_01.length; i++) {
                    index = array_01[i];
                    document.querySelector("#show09").innerHTML += `<em style="color: red">${arrays[index]}
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<em/>`;
                }
            }
            break;
    }
}

function Sort(x, y) {
    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
}

//-------------------------------------------------------------------------------------------------------------------------
//执行转换按钮事件
function Convert() {
    let Num = document.querySelector("#Num").value;
    if (Num == "") {
        document.querySelector("#show11").innerHTML = `<em style="color: red"> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            请输入需要转换的数据
            </em>`;
    } else {


        let i, part, newchar, tmpnewchar, perchar;

        for (i = Num.length - 1; i >= 0; i--) {
            Num = Num.replace(",", "")
            Num = Num.replace(" ", "")
        }
        if (isNaN(Num)) {
            return;
        }

        part = String(Num).split(".");
        newchar = "";

        for (i = part[0].length - 1; i >= 0; i--) {
            if (part[0].length > 10) {
                //alert("位数过大，无法计算");
                return "";
            }
            tmpnewchar = ""
            perchar = part[0].charAt(i);
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            switch (part[0].length - i - 1) {
                case 0:
                    tmpnewchar = tmpnewchar;
                    break;
                case 1:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 2:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 3:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 4:
                    tmpnewchar = tmpnewchar + "万";
                    break;
                case 5:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 6:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 7:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 8:
                    tmpnewchar = tmpnewchar + "亿";
                    break;
                case 9:
                    tmpnewchar = tmpnewchar + "拾";
                    break;
            }
            newchar = tmpnewchar + newchar;
        }

        while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
            newchar = newchar.replace("零亿", "亿");
            newchar = newchar.replace("亿万", "亿");
            newchar = newchar.replace("零万", "万");
            newchar = newchar.replace("零零", "零");
        }

        if (newchar.indexOf("一十") == 0) {
            newchar = newchar.substr(1);
        }

        if (newchar.lastIndexOf("零") == newchar.length - 1) {
            newchar = newchar.substr(0, newchar.length - 1);
        }
        document.querySelector("#show11").innerHTML = `<em style="color: red">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${newchar} </em>`;
        ;

    }
}
