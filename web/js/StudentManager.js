//学生管理类CRUD
class StudentManager {
    //初始值
    static init(){
        //创建学生对象
        stu_Array.push(new Student(1234, "小王", "1998-02-25", 91))
        stu_Array.push(new Student(1235, "小张", "1998-03-20", 66));
        stu_Array.push(new Student(1236, "小李", "1998-05-02", 76));
        stu_Array.push(new Student(1237, "小刘", "1998-07-09", 88));
        //升序排列
        StudentManager.sort(stu_Array);
        StudentManager.writer(stu_Array);
    }
    //排序方法
    static sort(array) {
        const handle = (property) => {
            return function (a, b) {
                const val1 = a[property];
                const val2 = b[property];
                return val1 - val2;
            }
        }
        array.sort(handle('score'));

    }

    //将学生保存到数组
    static save(stu_Array, student){
        stu_Array.push(student);
    }
    //保存后显示
    static saveShow() {
        document.querySelector("#stuId").removeAttribute(`readonly`);
        if ((/^[0-9]{1,8}$/.test(document.querySelector("#stuId").value.trim()))) {
            student_ID = Number.parseInt(document.querySelector("#stuId").value.trim());
            flag1 = true;
        } else {
            alert("请确保学号仅包含数字！")
        }
        if (document.querySelector("#stuName").value.trim().length >= 1) {
            student_Name = document.querySelector("#stuName").value.trim();
            flag2 = true;
        } else {
            alert("请输入长度大于等于1的的名字！");
        }
        if ((/[1,2][0-9]{3}-[0,1][0-9]-[0-3][0-9]/.test(document.querySelector("#birthday").value.trim()))) {
            student_Birthday = document.querySelector("#birthday").value.trim();
            flag3 = true;
        } else {
            alert("请输入正确的生日格式：1999-09-09！");
        }
        if (Number.parseInt(document.querySelector("#score").value.trim()) <= 100 && ((/^[0-9]{1,8}$/.test(document.querySelector("#score").value.trim())))) {
            student_Score = Number.parseInt(document.querySelector("#score").value.trim());
            flag4 = true;
        } else {
            alert("请输入0-100的分数！");
        }

        if (flag1 && flag2 && flag3 && flag4) {
            for (let i = 0; i < stu_Array.length; i++) {
                if (stu_Array[i].student_ID == student_ID) {
                    flag5 = true;
                }
            }
        }
        if (flag5) {
            alert("此学号已经存在，无法继续添加！")
        } else {

            let student = new Student(student_ID, student_Name, student_Birthday, student_Score);
            if (student_ID == undefined && student_Name == undefined && student_Birthday == undefined && student_Score == undefined) {
            } else {
                StudentManager.save(stu_Array, student);
                StudentManager.sort(stu_Array);
                document.getElementById("stulist").innerHTML = ``
                StudentManager.writer(stu_Array);

                document.querySelector("#stuId").value=``
                document.querySelector("#stuName").value=``
                document.querySelector("#birthday").value=``
                document.querySelector("#score").value=``
            }
        }
        //初始化
        flag1 = false, flag2 = false, flag3 = false, flag4 = false,flag7=1;
    }

    //更新学生数据
    static update(index) {
        document.querySelector("#stuId").setAttribute(`readonly`,`readonly`);
        document.querySelector("#stuName").style.color="#f60707";
        document.querySelector("#score").style.color="#f60404";
        document.querySelector("#birthday").style.color="#ff0505";
        let id=stu_Array[index].student_ID;
        let name=stu_Array[index].student_name;
        let birthday=stu_Array[index].birthday;
        let score=stu_Array[index].score;
        document.querySelector("#stuId").value=`${id}`;
        document.querySelector("#stuName").value=`${name}`;
        document.querySelector("#birthday").value=`${birthday}`;
        document.querySelector("#score").value=`${score}`;
    }

    //根据学号删除学生信息
    static delete(index) {
        stu_Array.splice(index,1);
        document.getElementById("stulist").innerHTML = ``
        StudentManager.writer(stu_Array);
    }

    //根据学号查询学生信息
    static select(id) {
        for (let i = 0; i < stu_Array.length; i++) {
            if (stu_Array[i].student_ID == id) {
                document.querySelector("#output").innerHTML = `${stu_Array[i].student_ID}----${stu_Array[i]
                    .student_name}----${stu_Array[i].birthday}----${stu_Array[i].score}`
            }
        }
    }

    //写入表格方法
    static writer(stu_Array) {
        a = 0;
        //向表格添加学生数据
        for (let s of stu_Array) {
            let tr = document.createElement("tr");
            for (let s_ar of Object.keys(s)) {
                let td = document.createElement("td");
                //设置单元格显示学生属性值
                td.textContent = s[s_ar];
                tr.appendChild(td);
            }
            let td_btn = document.createElement("td");
            td_btn.innerHTML = `<button onclick="update_Stu(${a})">修改</button><button onclick="delete_Stu(${a})">删除</button>`;
            a++;
            tr.appendChild(td_btn);
            document.querySelector("#stulist").appendChild(tr);

        }

    }
}

