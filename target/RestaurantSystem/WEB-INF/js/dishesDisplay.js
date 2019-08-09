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
                        element.innerHTML=' <button class="delete">加入购物车</button>';
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
    //页面加载完成后把桌号从url中取出并写入页面

    //写入cookie，然后用于购物车取到
    setCookie("tableId", document.getElementById("tableId").value = getId("id"));
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
                    element.innerHTML=' <button class="delete">加入购物车</button>';
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
                        element.innerHTML=' <button class="delete">加入购物车</button>';
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
 * 加入购物车的功能
 */
function deltete() {
    var dishesName = this.parentNode.parentNode.firstChild.innerText;
    var dishesPrice = this.parentNode.parentNode.childNodes[1].innerText;
    var tableId = document.getElementById("tableId").value;
    var one = {};
    one.dishesName = dishesName;
    one.dishesPrice = dishesPrice;
    one.tableId = tableId;
    var arr = getCookie("dishes");
    var value = JSON.parse(arr);
    var len = value.length;
    console.log(len);
    value[len] = one;
    console.log(value);
    var str = JSON.stringify(value);
    setCookie("dishes",str);
    alert("添加菜品成功");
}

$(document).ready(function(){
    var arrayObj = new Array();
    var str = JSON.stringify(arrayObj);
    setCookie("dishes",str);
})







/**
 * 写cookie的函数
 */


function setCookie (name, value) {
        document.cookie = name + '='+escape(value) + ';path='+'/';
}
/**
 * 获取cookie
 */

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

/**
 * 删除cookie的值
 */
function delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = setCookie(name)
    if (cval && cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
}



/**
 * 根据变量名获取匹配值
 */
function getId(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}