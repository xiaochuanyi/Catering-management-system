/**
 * 登录的js
 */
function forLogin() {
    var name = $("#username").val();
    var password = $("#userpassword").val();
    console.log(name);
    console.log(password);
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "Login",
        data: {"name": name, "password": password},
        type: "post",
        success: function (data) {
            if (data.status == 200) {
                window.location.href = "http://localhost:8080/select/display";
            } else if (data.status == 201) {
                alert(data.msg)
                location.reload();
            } else {
                alert("登录出错，请重新登录")
                window.location.href = "http://localhost:8080/";

            }
        },
        error: function () {
            alert("登录出错，请重新登录")
        },
        dataType: "json",
    });
}




