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
//提交的function
function upload(){
    var formData = new FormData();
    formData.append("photo",document.getElementById("picture").files[0]);
    formData.append("dishesName",document.getElementById("dishesName").value);
    formData.append("dishesPrice",document.getElementById("dishesPrice").value);
    formData.append("dishesDescribe",document.getElementById("dishesDescribe").value);
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/add/pictureAdd",
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
function cancel() {
    location.reload();
}