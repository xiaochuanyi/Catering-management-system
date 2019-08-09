(
 function display() {
    var data = getCookie("dishes");
    if(data != null) {
        var value = JSON.parse(data);
    }
    console.log(value);
     delCookie("dishes");
    var table = document.getElementById('table');
    var fragment = document.createDocumentFragment();
    value.forEach(function(item) {
        var temp = document.createElement('tr');
        for (var k in item) {
            var td = document.createElement('td');
            var text = document.createTextNode(item[k]);
            td.appendChild(text);
            temp.appendChild(td);
        }
        var element = document.createElement('td');
        element.innerHTML='<button class="delete">删除该菜品</button>';
        temp.appendChild(element);
        fragment.appendChild(temp);
    })
    table.appendChild(fragment);
    getTotalPrices(value);
})();
window.onload = function () {
    getButton();
    displayTbaleId();
}

/**
 * 展示当前桌号
 */
function displayTbaleId() {
    document.getElementById("tableId").value = getCookie("tableId");
}


/**
 * 计算总价的函数
 */
function getTotalPrices(value) {
    var price = 0;
    for(var i=0;i<= value.length-1;i++){
        price =  Number(price) + Number(value[i].dishesPrice) ;
    }
    document.getElementById("price").value = price;
}
/**
 * 获取按钮的函数
 */
function getButton(){
    var deleteArr = document.getElementsByClassName('delete');
    for(var i=0;i < deleteArr.length; i++){
        deleteArr[i].addEventListener('click',deltete,false);
    }
}




/**
 * 删除购物车菜品
 */
function deltete() {
    var dishesPrice = this.parentNode.parentNode.childNodes[1].innerText;
    var  dishes = this.parentNode.parentNode;
    var newPrice = Number(document.getElementById("price").value)  - Number(dishesPrice) ;
    document.getElementById("price").value = newPrice;
    dishes.remove();
}

/**
 * 添加菜品到结账清单的函数
 */
function invoicing() {
    var a = {};
    a.id = "test";
    a.name = "test";
    JSON.stringify(a);
    var list = [];
    var tableId = document.getElementById("tableId").value;
    var father = document.getElementById('table');   //获取父元素table
    var len = father.childNodes.length;        //获取table的所有子元素，子节点
    for(var i = 1;i <= len-2;i++){
        var dishes = {};
        var dishesName = father.childNodes[i].nextElementSibling.childNodes[0].innerText;
        dishes.tableId = tableId;
        dishes.dishesName = dishesName;
        list.push(dishes);
        console.log(list);
    }
    submit(list);
}

/**
 * 提交菜品
 */
function submit(list){
    //console.log(list);
    $.ajax({
        async: false,    //是否是异步请求，默认是true
        url: " http://localhost:8080/invoicing/toInvoicing",
        data: JSON.stringify(list),
        type: "post",
        contentType:'application/json;charset=UTF-8',
        success: function (data) {
            if (data.status == 200) {
                alert(data.msg);
                var myUrl = "http://localhost:8080/display/dishesDisplay?id="+getCookie("tableId");
                window.location.href = myUrl;
            } else {
                alert("出错，请稍后再试")
            }
        },
        error: function () {
            alert("登录出错，请重新登录")
        },
        dataType: "json",
    });
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
    document.cookie = name + "=" + "" + ";expires= " + "-1"+";path=" + "/";
    var arrayObj = new Array();
    var str = JSON.stringify(arrayObj);
    setCookie("dishes",str);
}

/**
 * 写cookie的函数
 */


function setCookie (name, value) {
    document.cookie = name + '='+escape(value) + ';path='+'/';
}