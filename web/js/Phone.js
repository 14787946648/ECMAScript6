//表情切换事件
document.querySelector("#img_Switch").addEventListener("click", function () {
    this.getAttribute("src").includes("02") ?
        this.setAttribute("src", "img/img01.png") :
        this.setAttribute("src", "img/img02.png");
});


//发送事件(吃瓜02---我说,奸笑01---他说)
document.querySelector("#img_Send").addEventListener("click", function () {
    document.querySelector("#img_Switch").getAttribute("src").includes("02") ?
        node_Writer(true) :
        node_Writer(false);
})


let flag = 0;

//写入函数(boolean(who)------true：他在说话)
function node_Writer(who) {
    //获取文本框内容
    let text_Input = document.querySelector("#input_Text").value.trim();

    //父节点对象
    let father_Show = document.querySelector("#show");

    //获取父节点里的第一个子节点
    let firstChild_Show = document.querySelector("#show").firstChild;


    if (who) {
        //创建对方学习显示div并设置其属性及内容
        let div_Her = document.createElement("div");
        div_Her.setAttribute("style", "width: 100%;height: 50px");
        div_Her.innerHTML = ` <img src="img/img02.png" style="float: left;margin-top:5px;background-color: rgba(15,255,0,0.39);color: #0a0a0a">
                <button style="text-align: start;max-width: 90%;float: left;margin-top: 5px">
                   说： ${text_Input}
                </button>`


        //对方说话写入并判断输入框是否为空
        text_Input == '' ? document.querySelector("#input_Text").setAttribute("placeholder",
            "请输入要发送的内容！") : father_Show.insertBefore(div_Her, firstChild_Show);
        //初始化文本框
        document.querySelector("#input_Text").value = ``;
    } else {
        //创建我方学习显示div并设置其属性及内容
        let div_I = document.createElement("div");
        div_I.setAttribute("style", "width: 100%;height: 50px");
        div_I.innerHTML = ` <img src="img/img01.png" style="float: right;margin-top:5px;border-radius: 5px">
                        <button style="text-align: end;max-width: 90%;float: right;margin-top: 5px;background-color: 
                        rgba(0,227,32,0.47);color: #0a0a0a">
                           说： ${text_Input}
                        </button>`;

        //我方说话写入并判断输入框是否为空
        text_Input == '' ? document.querySelector("#input_Text").setAttribute("placeholder",
            "请输入要发送的内容！") : father_Show.insertBefore(div_I, firstChild_Show);
        //初始化文本框
        document.querySelector("#input_Text").value = ``;
    }

    //定义清空标准：显示内容已经9行的话3秒后进行清除操作

    if (text_Input != '') {
        flag++;
    }
    if (Number.isInteger(flag / 11) && flag != 0) {
        //清除所有子节点
        setTimeout(() => {
            while (father_Show.firstChild) {
                let oldNode = father_Show.removeChild(father_Show.firstChild);
                oldNode = null;
            }
        }, 1000)

    }

}

//----------------------------------------------------------------------------------------------------------------------
//省市联动
let arrays = [
    array = ["Linux", "Windows", "UNIX"],
    array = ["Java", "Go", "Rust"],
    array = ["MySQL", "Oracle", "DB2"]
    // array = ["昆明市", "普洱市", "大理市", "临沧市", "曲靖市", "景洪市"],
    // array = ["贵阳市", "遵义市", "安顺市", "六盘水市", "黔南布依族苗族自治州", "黔东南苗族侗族自治州"],
    // array = ["广州市", "深圳市", "佛山市", "东莞市", "中山市", "珠海市", "汕头市"],
    // array = ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "潍坊市"],
    // array = ["长沙市", "株洲市", "湘潭市", "邵阳市", "郴州市", "岳阳市"],
];
document.querySelector("#sheng").addEventListener("change", function () {
    //获取省份标记
    let sheng = document.querySelector("#sheng").value;
    switch (sheng) {
        case '0':
            writer_Shi(arrays[0]);
            break;
        case '1':
            writer_Shi(arrays[1]);
            break;
        case '2':
            writer_Shi(arrays[2]);
            break;
    }
});

//写入Dom函数
function writer_Shi(array) {
    let father = document.querySelector("#shi");
    //清空市dom区
    while (father.firstChild) {
        let oldNode = father.removeChild(father.firstChild);
        oldNode = null;
    }
    //初始化市选择
    father.innerHTML = `<option value="" id="shi">请选择城市...</option>`;

    //遍历市集合并写入optain
    for (let i = 0; i < array.length; i++) {
        let optain = document.createElement("option");
        optain.innerHTML = `${array[i]}`
        father.appendChild(optain);
    }

}