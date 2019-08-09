/**
 * 更新菜品
 */
function upload() {
    var formData = new FormData();
    formData.append("photo",document.getElementById("picture").files[0]);
    formData.append("dishesName",document.getElementById("oldName").value);
    formData.append("dishesPrice",document.getElementById("dishesPrice").value);
    formData.append("dishesDescribe",document.getElementById("dishesDescribe").value);
    formData.append("dishesWithNewName",document.getElementById("dishesName").value);
    console.log(document.getElementById("dishesName").value);
    console.log(document.getElementById("oldName").value);
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/update/dishesUpdate",
        data:formData,
        contentType:false,
        //取消帮我们格式化数据，是什么就是什么
        processData:false,
        dataType : 'json',
        async : false,
        cache : false,
        type: "post",
        success: function (data) {
            alert(data.msg);
        },
        error: function () {
            alert("false");
        },
    });
}
window.onload = function () {
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/update/displayData",
        data: {"id" : getCookie("dishes")},
        type: "post",
        success: function (data) {
            document.getElementById("dishesName").value = data.dishesName;
            document.getElementById("dishesPrice").value = data.dishesPrice;
            document.getElementById("dishesDescribe").value = data.dishesDescription;
            document.getElementById("oldName").value = data.dishesName;
        },
        error: function () {
            alert("请稍后再试")
        },
        dataType: "json",
    });
}

/**
 * 获取cookie
 */
// 调用

function getCookie(cookie_name) {
    var allcookies = document.cookie;
    //索引长度，开始索引的位置
    var cookie_pos = allcookies.indexOf(cookie_name);

    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可
        //计算取cookie值得开始索引，加的1为“=”
        cookie_pos = cookie_pos + cookie_name.length + 1;
        //计算取cookie值得结束索引
        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1) {
            cookie_end = allcookies.length;

        }
        //得到想要的cookie的值
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
}

//选择图片，马上预览
function xmTanUploadImg(obj) {
    var file = obj.files[0];

    console.log(obj);console.log(file);
    console.log("file.size = " + file.size);  //file.size 单位为byte

    var reader = new FileReader();

    //读取文件过程方法
    reader.onloadstart = function (e) {
        console.log("开始读取....");
    }
    reader.onprogress = function (e) {
        console.log("正在读取中....");
    }
    reader.onabort = function (e) {
        console.log("中断读取....");
    }
    reader.onerror = function (e) {
        console.log("读取异常....");
    }
    reader.onload = function (e) {
        console.log("成功读取....");

        var img = document.getElementById("xmTanImg");
        img.src = e.target.result;
        //或者 img.src = this.result;  //e.target == this
    }
    reader.readAsDataURL(file)
}