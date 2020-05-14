"use strict"

//获取随机数
let random_Num=Math.floor(Math.random()*100);

//再来一次
function again(){
    window.location.reload();
}

//取消
function Cancel() {
    window.opener = null;
    window.open('', '_self');
    window.close();
}

function checkNum(){
    //获取文本框内容
    let Text_num=Number.parseFloat(document.querySelector("#num").value.trim());

    //判断逻辑
    if (Number.isInteger(Text_num)){
        if ( Text_num>=0 && Text_num < 100){
            if (Text_num==random_Num){
                let style_Display=document.querySelector("#container");
                style_Display.getAttributeNode("style").value="display:none";
                let style_Display_Img=document.querySelector("#container02");
                style_Display_Img.getAttributeNode("style").value="display:block";
            }else if(Text_num>random_Num){
                alert("你猜的数字太大了！")
            }else if(Text_num<random_Num){
                alert("你猜的数字太小了！")
            }
        }else {
            alert("请输入0-99的整数！");
        }
    }else{
        alert("您是输入的数据不是整数！")
    }
}
