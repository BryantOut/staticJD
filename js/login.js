/*
    *  在光标离开输入框的时候，就验证输入的内容是否满足要求
    *
    *       注册失去焦点事件，获取输入的内容，进行正则验证
    *
    * */

/* var texOfPhone = document.getElementById("phone");


texOfPhone.onblur = function () {
    // 1 获取输入框的内容
    var text = this.value;
    console.log(text);
    // 2 跟正则表达式匹配
    // 手机号码的特点： 1全是数字 2数字，11位去 3 以1开头
    var reg = /^[1]\d{10}$/;
    // 如果匹配成功，就不提示，否则提示
    if (reg.test(text)) {
        this.parentNode.children[2].innerHTML = '';
        this.parentNode.children[2].style.background = '';
        console.log(this.parentNode.children[2]);
    }else {
        this.parentNode.children[2].innerHTML = '手机号码格式不正确，请从新输入';
        this.parentNode.children[2].style.background = 'url(./img/alertIcon.gif) no-repeat';
        console.log(this.parentNode.children[2]);
    }
} */


// 正则表达式--表单验证封装
function test(id, reg, alert) {
    var textObj = document.getElementById(id);

    textObj.onblur = function () {
        // 1 获取输入框的内容
        var text = this.value;
        if (reg.test(text)) {
            this.parentNode.children[2].innerHTML = '';
            this.parentNode.children[2].style.background = '';
            console.log(this.parentNode.children[2]);
        } else {
            this.parentNode.children[2].innerHTML = alert;
            this.parentNode.children[2].style.background = 'url(./img/alertIcon.gif) no-repeat';
            console.log(this.parentNode.children[2]);
        }
    }
}


test("phone", /^[1]\d{10}$/, "手机号码格式不正确，请重新输入");
test("QRcode", /^\d{6}$/, "请重新输入六位数验证码");
test("password", /^\d{6,12}$/, "密码6~12位数，请重新输入");

var password = document.getElementById("password");
var ConfirmPsw = document.getElementById("ConfirmPsw");
ConfirmPsw.onblur = function () {
    var passwordText = password.value;
    var ConfirmPswTxet = this.value;
    console.log(ConfirmPswTxet);
    if (passwordText == ConfirmPswTxet) {
        this.parentNode.children[2].innerHTML = '';
        this.parentNode.children[2].style.background = '';
    } else {
        this.parentNode.children[2].innerHTML = "密码不一致，请从新输入";
        this.parentNode.children[2].style.background = 'url(./img/alertIcon.gif) no-repeat';
    }
}