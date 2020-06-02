
//学生类：学号、姓名、出生日期、成绩，方法包括学习、睡觉、吃饭。
class Student {
    constructor(student_ID, student_name, birthday, score) {
        this._student_ID = student_ID;
        this._student_name = student_name;
        this._birthday = birthday;
        this._score = score;
    }

    get student_ID() {
        return this._student_ID;
    }

    set student_ID(value) {
        this._student_ID = value;
    }

    get student_name() {
        return this._student_name;
    }

    set student_name(value) {
        this._student_name = value;
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

    eat() {
        alert(this._student_name`:下课了，该吃饭了！`);
    }

    sleep() {
        alert(this._student_name`:吃完饭该午休了！`);
    }

    learn() {
        alert(this._student_name`:起床学习啦！`);
    }
}


