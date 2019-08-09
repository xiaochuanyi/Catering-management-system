/**
 * 商品展示的js
 */
(
    function dishesDisplay(){
        var page = document.getElementById("page").value;
        $.ajax({
            async:false,    //是否是异步请求，默认是true
            url:"http://localhost:8080/select/dishesSelectWithPage",
            type:"post",
            data:{"page":page},
            success:function(data) {
                if (data.status == "200"){
                    var table = document.getElementById('table');
                    var fragment = document.createDocumentFragment();
                    data.msg.forEach(function(item) {
                        var temp = document.createElement('tr');
                        for (var k in item) {
                            if (k === "pictureUrl") {
                                var td = document.createElement('td');
                                var img = document.createElement('img');
                                img.src = item[k];
                                img.style.width = 50;
                                img.style.height = 50;
                                td.appendChild(img);
                            } else {
                                var td = document.createElement('td');
                                var text = document.createTextNode(item[k]);
                                td.appendChild(text);
                            }
                            temp.appendChild(td);
                        }
                        var element = document.createElement('td');
                        element.innerHTML='<button class="update">修改</button> | <button class="delete">删除</button>';
                        temp.appendChild(element);
                        fragment.appendChild(temp);
                    })
                    table.appendChild(fragment);
                }else {
                    alert("查询出错，请稍后再试");
                }
            },
            error:function(data){
                if(data.status == "303"){
                    alert("请稍后再试");
                }
            },
            dataType:"json",
        })
    }
)();

function getButton(){
    // alert('我在页面加载完成后显示');
    var updateArr = document.getElementsByClassName('update');
    var deleteArr = document.getElementsByClassName('delete');
    //console.log(updateArr);
    //console.log(deleteArr);
    for(var i=0;i < updateArr.length; i++){
        updateArr[i].addEventListener('click',update,false);
    }
    for(var i=0;i < deleteArr.length; i++){
        deleteArr[i].addEventListener('click',deltete,false);
    }
}


 window.onload = function () {
    getButton();
}

/**
 * 下一页的js
 */
function nextPage() {
    ABC();
    var page = document.getElementById("page");
    page.value =  Number(page.value) + Number(1) ;
    var newPage = page.value;
    $.ajax({
        async:false,    //是否是异步请求，默认是true
        url:"http://localhost:8080/select/dishesSelectWithPage",
        type:"post",
        data:{"page":newPage},
        success:function(data) {
            if (data.status == "200"){
                var table = document.getElementById('table');
                var fragment = document.createDocumentFragment();
                data.msg.forEach(function(item) {
                    var temp = document.createElement('tr');
                    for (var k in item) {
                        if (k === "pictureUrl") {
                            var td = document.createElement('td');
                            var img = document.createElement('img');
                            img.src = item[k];
                            img.style.width = 50;
                            img.style.height = 50;
                            td.appendChild(img);
                        } else {
                            var td = document.createElement('td');
                            var text = document.createTextNode(item[k]);
                            td.appendChild(text);
                        }
                        temp.appendChild(td);
                    }
                    var element = document.createElement('td');
                    element.innerHTML='<button class="update">修改</button> | <button class="delete">删除</button>';
                    temp.appendChild(element);
                    fragment.appendChild(temp);
                })
                table.appendChild(fragment);
                getButton();
            }else {
                alert("查询出错，请稍后再试");
            }
        },
        error:function(data){
            if(data.status == "303"){
                alert("请稍后再试");
            }
        },
        dataType:"json",
    })
}

/**
 * 上一页的page
 */

function previousPage() {
        ABC();
        var page = document.getElementById("page");
        if (page.value > 1) {
            page.value =  Number(page.value) - Number(1) ;
            var newPage = page.value;
            $.ajax({
                async:false,    //是否是异步请求，默认是true
                url:"http://localhost:8080/select/dishesSelectWithPage",
                type:"post",
                data:{"page":newPage},
                success:function(data) {
                    if (data.status == "200"){
                        var table = document.getElementById('table');
                        var fragment = document.createDocumentFragment();
                        data.msg.forEach(function(item) {
                            var temp = document.createElement('tr');
                            for (var k in item) {
                                if (k === "pictureUrl") {
                                    var td = document.createElement('td');
                                    var img = document.createElement('img');
                                    img.src = item[k];
                                    img.style.width = 50;
                                    img.style.height = 50;
                                    td.appendChild(img);
                                } else {
                                    var td = document.createElement('td');
                                    var text = document.createTextNode(item[k]);
                                    td.appendChild(text);
                                }
                                temp.appendChild(td);
                            }
                            var element = document.createElement('td');
                            element.innerHTML='<button class="update">修改</button> | <button class="delete">删除</button>';
                            temp.appendChild(element);
                            fragment.appendChild(temp);
                        })
                        table.appendChild(fragment);
                        getButton();
                    }else {
                        alert("查询出错，请稍后再试");
                    }
                },
                error:function(data){
                    if(data.status == "303"){
                        alert("请稍后再试");
                    }
                },
                dataType:"json",
            })
    }else {
            alert("已经是首页")
            location.reload();
        }
}

/**
 * 返回首页的函数
 */

function toFirst() {
    location.reload();
}

/**
 * 删除当前页的函数
 */
function ABC(){
    var father = document.getElementById('table');   //获取父元素table
    var name = father.childNodes[1].childNodes[0];  //获取自身（第一行的固定内容）
    var len = father.childNodes[1].children;         //获取table的所有子元素，子节点
    for(var i = 0 ;i < len.length+4;i++){
        var name2 = father.childNodes[1].nextElementSibling;  //获取下一个兄弟
        if(name2 != null) {
            name2.remove();
        }
    }
}

/**
 * 删除菜品的功能
 */
function deltete() {
    var dishesName = this.parentNode.parentNode.firstChild.innerText;
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/delete/dishesDelete",
        data: {"dishesName" : dishesName},
        type: "post",
        success: function (data) {
            if (data.status == 200) {
                alert("删除成功")
                location.reload();
            } else {
                alert("删除失败，请重试")
            }
        },
        error: function () {
            alert("请稍后再试")
        },
        dataType: "json",
    });
}


/**
 * 更新菜品跳转的函数
 */

function update() {
    var dishesName = this.parentNode.parentNode.firstChild.innerText;
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/update/toSetCookie",
        dataType: "json",
        data:{"dishesName":dishesName},
        type: "post",
        success: function (data) {
            window.location.href = "http://localhost:8080/update/toUpdate";
        },
        error: function () {
            alert("请稍后再试")
        },
    });
}



/**
 * 更新菜品
 */
function update1() {
    //console.log(this);
    var caiming = this.parentNode.parentNode.firstChild.innerText;
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: "http://localhost:8080/update/dishesUpdate",
        data: {"dishesName" : "回锅肉","dishesPrice" : "16","dishesDescription" : "测试更新" ,"pictureUrl":"../img/Desert.jpg","beforeDishesName" : "蛋炒饭"},
        type: "post",
        success: function (data) {
            if (data.status == 200) {
                alert("更新成功")
                location.reload();
            } else {
                alert("更新失败，请重试")
            }
        },
        error: function () {
            alert("请稍后再试")
        },
        dataType: "json",
    });
}


