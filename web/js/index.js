//---------------------------------------------------One------------------------------------------------------------------------------
//定义操作系统、数据库、开发语言的元素数组（类二级省市联动）
let arrays = [
    array = ["Linux", "Windows", "UNIX"],
    array = ["Java", "Go", "Rust"],
    array = ["MySQL", "Oracle", "DB2"]
];

//监听id为type_All的元素改变事件
document.querySelector("#type_All").addEventListener("change", function () {
    //获取类型标记值value
    let type_Value = document.querySelector("#type_All").value;
    //按value的值将arrays数组的i号元素作为参数并调用写入dom的函数
    switch (type_Value) {
        case '0':
            writer_Detailed(arrays[0]);
            break;
        case '1':
            writer_Detailed(arrays[1]);
            break;
        case '2':
            writer_Detailed(arrays[2]);
            break;
    }
});

//写入Dom函数
function writer_Detailed(array) {
    let father = document.querySelector("#detailed");
    //清空类型详细写入dom区
    while (father.firstChild) {
        let oldNode = father.removeChild(father.firstChild);
        oldNode = null;
    }
    //初始化详细选择
    father.innerHTML = `<option value="" id="detailed">请选择...</option>`;

    //遍历数组并写入optain
    for (let i = 0; i < array.length; i++) {
        let optain = document.createElement("option");
        optain.innerHTML = `${array[i]}`
        father.appendChild(optain);
    }
}
//---------------------------------------------------Two------------------------------------------------------------------------------

//键盘按下enter事件
let inputText=document.querySelector("input");
inputText.addEventListener("keyup",function(e){
    if(e.key=="Enter") writer_Text();
})

//定义x的标记
let count=2;

//按下enter事件后执行的函数
function writer_Text(){
    //获取文本输入框的内容
    let input_Text=document.querySelector("#input_Text").value.trim();
    //获取写入目标区的父节点
    let writer_Dom=document.querySelector("#writer_Dom");
    //创建要加入的节点
    let li=document.createElement("li");
    //设置新建标签的属性class
    li.setAttribute("class","list-group-item list-group-item-primary");
    //设置li标签的内容为按钮
    li.innerHTML=`${input_Text} <button type="button" class="btn btn-sm btn-outline-danger float-right">X</button>`;
    count++;
    //为ul标签写入新的li标签
    if(input_Text!=""){
        writer_Dom.appendChild(li);
        //初始化输入框
        document.querySelector("#input_Text").value=``;
    }else {
        alert("请输入要保存的备忘录！")
    }

}

//点击x执行删除当前行事件
document.querySelectorAll("button").addEventListener("click",function () {

});

//点击清空执行清空事件
document.querySelector("#clearAll").addEventListener("click",function () {
    //清空ul标签所有子节点
    let father=document.querySelector("#writer_Dom");
    while (father.firstChild) {
        let oldNode = father.removeChild(father.firstChild);
        oldNode = null;
    }
});