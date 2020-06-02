let num = 100, flags = false, flags1 = false, new_Array, array_Img = [100, 101, 102, 103, 104, 105, 106, 107, 108];

document.querySelector("#img").src = `${"img/" + num + ".jpg"}`;
document.querySelector("#witer").innerHTML = `<h6>${array_Img.indexOf(num) + 1}/9</h6>`;

//循环切换
function Cycle() {
    flags1 = true;
    flags = false;
    document.querySelector("#writer2").innerHTML = `循环切换范围1-9-9-1......`;
}
//顺序切换
function Oder() {
    flags = true;
    flags1 = false;
    document.querySelector("#writer2").innerHTML = `顺序切换范围1-9`;
}

if (flags) {
    Next();
    Previous()

} else {
    document.querySelector("#img").src = `${"img/" + 100 + ".jpg"}`;
    document.querySelector("#witer").innerHTML = `<h6>${array_Img.indexOf(num) + 1}/9</h6>`;
}


//下一张事件
function Next() {
    //顺序下一张
    if (flags) {
        if (num <= 108) {
            show()
            num++;
        } else {
            num = 108;
            show()
            alert("这是最后张了！")
        }
    }

    //循环下一张
    if (flags1) {
        if (num < 108) {
            show()
            num++
        } else if (num >= 108) {
            show()
            num = 100;
        }
    }
}

//上一张事件
function Previous() {
    //顺序上一张
    if (flags) {
        num--;
        if (num <= 109 && num >= 100) {
            show()
        } else {
            num = 100;
            show()
            alert("这是第一张了！")
        }
    }
    //循环上一张
    if (flags1) {
        if (num >= 100 && num <= 109) {
            show();
            num--;
        } else {
            num = 108;
            show();
        }
    }
}

function show() {
    document.querySelector("#img").src = `${"img/" + num + ".jpg"}`;
    document.querySelector("#witer").innerHTML = `<h6>${array_Img.indexOf(num) + 1}/9</h6>`;
}


//---------------------------------------------------图片排序------------------------------------------------------------------

new_Array = [101, 102, 103, 104, 105, 106, 107, 108];

//升序
function addQueue() {
    //清空目标区域
    document.querySelector("#writer01").innerHTML ='';
    new_Array = new_Array.sort((a, b) => a - b);
    for (let i = 0; i < new_Array.length; i++) {
        showTow(new_Array[i]);
    }
}

//降序
function lessQueue() {
    //清空目标区域
    document.querySelector("#writer01").innerHTML ='';
    new_Array = new_Array.sort((a, b) => b - a);
    for (let i = 0; i < new_Array.length; i++) {
        showTow(new_Array[i]);
    }
}

//无序
function disorderQueue() {
    //清空目标区域
    document.querySelector("#writer01").innerHTML ='';
    shuffle(new_Array);
    for (let i = 0; i < new_Array.length; i++) {
        showTow(new_Array[i]);
    }
}

//打乱数组
function shuffle(arr) {
    //清空目标区域
    document.querySelector("#writer01").innerHTML ='';
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

function showTow(tep) {
    document.querySelector("#writer01").innerHTML += `<img src="img/imgs/${tep}.jpg" style="width: 24% ;height: 250px;border: 1px solid crimson">`
}