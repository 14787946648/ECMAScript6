let flag_InputUserName

//任一input丢失焦点开始执行数据校验
function check_Data(E) {
    //根据传入参数确定校验对象input
    switch (E) {
        case 1:
            //判断正则匹配username结果并显示正确错误提示
            if (!(/^\D\w{5,19}$/).test(document.querySelector("#inputUserName").value.trim())) {
                document.querySelector("#show_UserName").style.display = `block`;
                document.querySelector("#show_UserName >div").innerHTML = `用户名格式错误！`;
                setTimeout(`document.querySelector("#show_UserName").style.display = \`none\`;`, 4000);
            } else {
                document.querySelector("#show_UserName >div").innerHTML = `正确！`;
                document.querySelector("#show_UserName").style.display = `block`;
                setTimeout(`document.querySelector("#show_UserName").style.display = \`none\`;`, 4000);
            }
            break;
        case 2:
            //判断正则匹配password结果并显示正确错误提示
            if (!(/^[1-9][0-9]{5,7}$/).test(document.querySelector("#inputPassword").value.trim())) {
                document.querySelector("#show_Password").style.display = `block`;
                document.querySelector("#show_Password >div").innerHTML = `用户密码格式错误！`;
                setTimeout(`document.querySelector("#show_Password").style.display = \`none\`;`, 4000);
            } else {
                document.querySelector("#show_Password >div").innerHTML = `正确！`;
                setTimeout(`document.querySelector("#show_Password").style.display = \`none\`;`, 4000);
            }
            break;
        case 3:
            //判断正则匹配phone结果并显示正确错误提示
            if (!(/^1[0-9]{10}$/).test(document.querySelector("#inputPhone").value.trim())) {
                document.querySelector("#show_Phone").style.display = `block`;
                document.querySelector("#show_Phone >div").innerHTML = `电话号码格式错误！`;
                setTimeout(`document.querySelector("#show_Phone").style.display = \`none\`;`, 4000);
            } else {
                document.querySelector("#show_Phone").style.display = `block`;
                setTimeout(`document.querySelector("#show_Phone").style.display = \`none\`;`, 4000);
            }
            break;
    }
}

function login() {
    check_Data(1);
    check_Data(2);
    check_Data(3);
    if ((/^1[0-9]{10}$/).test(document.querySelector("#inputPhone").value.trim()) && (/^[1-9][0-9]{5,7}$/).test
    (document.querySelector("#inputPassword").value.trim()) && (/^\D\w{5,19}$/).test(document.querySelector
    ("#inputUserName").value.trim())) {
        alert('注册成功！')
    }
}