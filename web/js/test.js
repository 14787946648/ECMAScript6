class Student {
    constructor(id, name, sex, birthday, score, clazz) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._birthday = birthday;
        this._score = score;
        this._clazz = clazz;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get sex() {
        return this._sex;
    }

    set sex(value) {
        this._sex = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }

    get clazz() {
        return this._clazz;
    }

    set clazz(value) {
        this._clazz = value;
    }

    toString() {
        return "{" + "id= " + this._id + "---"
            + "name= "
            + this._name + "---" +
            "sex= " + this._sex + "---" +
            "birthday= " + this._birthday +
            "---" + "score= " + this._score + "---"
            + "clazz= " + this._clazz + "}";
    }

}


// 1、创建学生类Student，属性包括学号（id）、姓名(name)、性别(sex)、出生日期(birthday)、成绩(score)、班级(clazz)。
// 2、使用new关键字创建4名学生对象，并将学生对象添加至Set中。
// 3、通过遍历Set计算所有学生的平均成绩。
// 4、通过遍历Set计算各班的平均成绩。
let set = new Set();
let map = new Map();
set.add(new Student(10001, "小王", "男", "1999-09-09", 66, "W101"));
set.add(new Student(10002, "小张", "女", "1997-11-23", 70, "W201"));
set.add(new Student(10003, "小李", "男", "2000-04-14", 81, "W201"));
set.add(new Student(10004, "小刘", "女", "2001-12-09", 99, "W101"));

let sum = 0, count = 0;
for (let obj of set) {
    //求所有学生分数和
    sum += obj.score;
    //将所有班级-分数加入map集合
    if (map.has(obj.clazz)) {
        //存在相同键则值相加并记录加入次数
        map.set(obj.clazz, map.get(obj.clazz) + obj.score);
        count++;
    } else {
        map.set(obj.clazz, obj.score);
    }
}
//遍历map
for (let [k, v] of map.entries()) {
    console.log(k, v);
    document.querySelector("#score1").innerHTML += `<p><em>${k}班学生的平均成绩为：${v / count}分</em></p>`
}
document.querySelector("#score").innerHTML = `<em>所有学生的平均成绩为：${sum / set.size}分</em>`





// 1、基于作业2，将Set集合中的Student对象遍历出来，存放在Map中，其中key为学号、value为Student对象。
// 2、遍历Map,输出所有的Student对象
let maps = new Map();
for (let obj of set) {
    maps.set(obj.id, obj);
}
for (let [k, v] of maps.entries()) {
    document.querySelector("#score2").innerHTML += `<p><em>${k}-------   ${v.toString()}   </em></p>`
}










// 1、实现随机生成双色球号码。
// 红球数字1-33
let set_Ball_Red = new Set();
let set_Ball_Blue = new Set();

while (set_Ball_Red.size < 6) {
    set_Ball_Red.add("红" + Math.floor(Math.random() * 32 + 1));
}
set_Ball_Blue.add("蓝" + Math.floor(Math.random() * 6 + 1));
let array_Ball_Red = [...set_Ball_Red];
let array_Ball_Blue = [...set_Ball_Blue];
document.querySelector("#result").innerHTML += `开奖结果： `
for (let a of array_Ball_Red) {
    document.querySelector("#result").innerHTML += `<span style="color: red">${a}---</span>`
}
document.querySelector("#result").innerHTML += `<span style="color: blue">${array_Ball_Blue[0]}</span>`


// 每组随机生成6个红球，一个蓝球，为中奖号码
// 使用set特性。
