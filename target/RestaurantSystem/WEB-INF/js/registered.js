function forRegister(){
    var oError = document.getElementById("error_box");
    var name =$("#username").val() ;
    var password =$("#userpassword").val() ;
    var password1 =$("#userpassword1").val() ;
    var isError = true;
    oError.innerHTML = "<br>";
    if(password != password1){
        oError.innerHTML = "设置密码和验证密码不一致";
        return;
    }
    $.ajax({
        async:false,    //是否是异步请求，默认是true
        url:"http://localhost:8080/Register/adminRegistered",
        data:{"name":name,"password":password},
        type:"post",
        success:function(data){
            if(data.status == 200){
                alert("注册成功");
                window.location.href = "http://localhost:8080/toLogin";
            }else if(data.status == 301){
                alert(data.msg)
                location.reload();
            }else {
                alert("注册出错，请重新登录")
                location.reload();
            }
        },
        error:function(){
            alert("出错，请重新登录")
        },
        dataType:"json",
    });
}
