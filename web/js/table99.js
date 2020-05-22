"use strict";
//9*9table
document.write("<table cellspacing='0'>");
for (let i = 1; i < 10; i++) {
    document.write("<tr >")
    for (let j = 1; j <= i; j++) {
        document.write("<td style='border: 1px solid chartreuse;background-color: #7aeca3;'>" + " " + j + " * " + i
            + " = " + i * j + " " + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("------------------------------------------------------------------------------------------------------" +
    "------------------------------------------------------------------------------------------------------------------" +
    "-------------------------");
/*
* 公鸡：5元，母鸡：3元，小鸡3只1元
* 用100元刚好买100只鸡，请问：公鸡x，母鸡y，小鸡z各多少只？（每种都要有）
* x+y+z=100
* 5x+3y+z/3=100                     !---x,y,z为整数
*
* */

document.write(`<em style="color: #0247f6">cut
<p>公鸡：5元，母鸡：3元，小鸡3只1元,用100元刚好可以买100只鸡，请问：公鸡，母鸡，小鸡各多少只？（每种都要有）</p>
<p><input type="button" value="exee" style="background-color: #f38a81" id="execute" onclick="execute()"></p>
</em>`)

let count = 0;
let a, b;

function execute() {
    for (a = 1; a <= 100 / 5; a++) {
        for (b = 1; b <= Math.floor(100 / 3); b++) {
            if (5 * a + 3 * b + (100 - a - b) / 3 == 100 && a + b + (100 - a - b) == 100) {
                count++;
                document.write(`<p><em style="color: #f80303">第${count}种方案：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    公鸡: ${a}只&nbsp&nbsp&nbsp&nbsp母鸡:${b}只&nbsp&nbsp&nbsp&nbsp小鸡:${(100 - a - b)}只</em></b>`)
            }
        }
    }
}
