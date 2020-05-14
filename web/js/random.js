"use strict"

//获取随机数
let random_Num=Math.floor(Math.random()*100);
let count=0;

//再来一次刷新网页
function again(){
    window.location.reload();
}

//取消推出网页
function Cancel() {
    window.opener = null;
    window.open('', '_self');
    window.close();
}

function checkNum(){
    //获取文本框内容
    let text_Num=Number.parseFloat(document.querySelector("#num").value.trim());

    //判断逻辑
    if (Number.isInteger(text_Num)){
        if ( text_Num>=0 && text_Num < 100){
            if (text_Num==random_Num){
                ++count;
                // document.querySelector("#container").getAttributeNode("style").value="display:none";
                document.querySelector("#container").style.display="none";
                // document.querySelector("#container02").getAttributeNode("style").value="display:block";
                document.querySelector("#container02").style.display="block";
                document.querySelector("#container02_Txt").innerHTML=`"恭喜你！你用了${count}次之后......答对了！再来一次吗？"`;
            }else if(text_Num>random_Num){
                alert("你猜的数字太大了！")
                ++count;
            }else if(text_Num<random_Num){
                alert("你猜的数字太小了！")
                ++count;
            }
        }else {
            alert("请确认输入数据范围：0-99！");
        }
    }else{
        alert("您是输入的数据不是整数！")
    }
}
