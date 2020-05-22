//获取系统当前时间
// let now = new Date(2020,5,24,23,59,50), hour, minute, second, flags = false;//测试使用时间
let now = new Date(), hour, minute, second, flags = false;
hour = Number(now.getHours().toString().padStart(2, "0"));
minute = Number(now.getMinutes().toString().padStart(2, "0"));
second = Number(now.getSeconds().toString().padStart(2, "0"));

//默认显示当前时间
writerHour(hour);
writerMinute(minute);
writerSecond(second);
document.querySelector("#colon1").innerHTML = `<h3>：</h3>`;
document.querySelector("#colon2").innerHTML = `<h3>：</h3>`;

//时间戳定义时间规则+1sec规则
let timer = setInterval(() => {
    //间隔符是否显示判断标记
    if (flags == false) {
        flags = true;
    } else {
        flags = false;
    }

    //当前秒值加1并对second范围分析
    second++;
    if (second <= 59) {
        writerSecond(second);
        xiaoGuo_Second();
    } else if (second == 60) {
        writerSecond(0);
        xiaoGuo_Second();
        second = 0;
        minute++;
        writerMinute(minute);
        xiaoGuo_Minute();
    }

    //对minute分析
    if (minute == 60) {
        minute = 0;
        writerMinute(0);
        xiaoGuo_Minute();
        hour++;
        writerHour(hour);
        xiaoGuo_Hour();
    }
    //对hour分析
    if (hour == 24) {
        writerHour(0);
        xiaoGuo_Hour();
        hour = 0;
    }
    //间隔符：的display属性控制
    show();
}, 1000);

//间隔符显示逻辑分析
function show() {
    if (flags == true) {
        document.querySelector("#colon1").innerHTML = ``;
        document.querySelector("#colon2").innerHTML = ``;
    } else {
        document.querySelector("#colon1").innerHTML = `<h3>：</h3>`;
        document.querySelector("#colon2").innerHTML = `<h3>：</h3>`;
    }
}

//写入时间规则
function writerSecond(new_Second) {
    if (new_Second >= 10) {
        document.querySelector("#second").innerHTML = `<h3>${new_Second}</h3>`;
    } else {
        document.querySelector("#second").innerHTML = `<h3>0${new_Second}</h3>`;
    }
}

function writerMinute(new_Minute) {
    if (new_Minute >= 10) {
        document.querySelector("#minute").innerHTML = `<h3>${new_Minute}</h3>`;
    } else {
        document.querySelector("#minute").innerHTML = `<h3>0${new_Minute}</h3>`;
    }
}

function writerHour(new_Hour) {

    if (new_Hour >= 10) {
        document.querySelector("#hour").innerHTML = `<h3>${new_Hour}</h3>`;
    } else {
        document.querySelector("#hour").innerHTML = `<h3>0${new_Hour}</h3>`;
    }

}
//切换效果规则
//秒
function xiaoGuo_Second() {
    document.querySelector("#second").style.height = `0px`;
    setTimeout(aa1,100);
}
function aa1() {
    document.querySelector("#second").style.height = `13px`;
    setTimeout(bb1,100);
}

function bb1() {
    document.querySelector("#second").style.height = `26px`;
    setTimeout(cc1,100);
}
function cc1() {
    document.querySelector("#second").style.height = `39px`;
}


//分
function xiaoGuo_Minute() {
    document.querySelector("#minute").style.height = `0px`;
    setTimeout(ee1,100);
}
function ee1() {
    document.querySelector("#minute").style.height = `13px`;
    setTimeout(ff1,100);
}

function ff1() {
    document.querySelector("#minute").style.height = `26px`;
    setTimeout(gg1,100);
}
function gg1() {
    document.querySelector("#minute").style.height = `39px`;
}

//时
function xiaoGuo_Hour() {
    document.querySelector("#hour").style.height = `0px`;
    setTimeout(hh1,100);
}
function hh1() {
    document.querySelector("#hour").style.height = `19px`;
    setTimeout(ii1,100);
}

function ii1() {
    document.querySelector("#hour").style.height = `26px`;
    setTimeout(jj1,100);
}
function jj1() {
    document.querySelector("#hour").style.height = `39px`;
}