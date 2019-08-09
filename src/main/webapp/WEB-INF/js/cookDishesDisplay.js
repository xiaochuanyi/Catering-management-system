/**
 * 商品展示的js
 */
(
    function dishesDisplay(){
        $.ajax({
            async:false,    //是否是异步请求，默认是true
            url:"http://localhost:8080/CookDishes/CookDishes",
            type:"post",
            success:function(data) {
                    var table = document.getElementById('table');
                    var fragment = document.createDocumentFragment();
                    data.forEach(function(item) {
                        var temp = document.createElement('tr');
                        for (var k in item) {
                                var td = document.createElement('td');
                                var img = document.createElement('img');
                                img.src = item[k];
                                img.style.width = 50;
                                img.style.height = 50;
                                td.appendChild(img);
                                var td = document.createElement('td');
                                var text = document.createTextNode(item[k]);
                                td.appendChild(text);
                            temp.appendChild(td);
                        }
                        var element = document.createElement('td');
                        element.innerHTML='<button class="delete">已完成，点击删除</button>';
                        temp.appendChild(element);
                        fragment.appendChild(temp);
                    })
                    table.appendChild(fragment);
            },
            error:function(data){
                    alert("请稍后再试");
            },
            dataType:"json",
        })
    }
)();

function getButton(){
    var deleteArr = document.getElementsByClassName('delete');
    for(var i=0;i < deleteArr.length; i++){
        deleteArr[i].addEventListener('click',deltete,false);
    }
}


window.onload = function () {
    getButton();
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
    var  dishes = this.parentNode.parentNode;
    console.log(dishes);
    dishes.remove();
}


//每隔一段时间执行的函数 3000为3s
window.setInterval("dishesDisplay()",1000 * 3);


/**
 * 展示商品
 */

function dishesDisplay(){
    $.ajax({
        async:false,    //是否是异步请求，默认是true
        url:"http://localhost:8080/CookDishes/CookDishes",
        type:"post",
        success:function(data) {
                var table = document.getElementById('table');
                var fragment = document.createDocumentFragment();
                data.forEach(function(item) {
                    var temp = document.createElement('tr');
                    for (var k in item) {
                            var td = document.createElement('td');
                            var text = document.createTextNode(item[k]);
                            td.appendChild(text);
                        temp.appendChild(td);
                    }
                    var element = document.createElement('td');
                    element.innerHTML='<button class="delete">已完成，点击删除</button>';
                    temp.appendChild(element);
                    fragment.appendChild(temp);
                })
                table.appendChild(fragment);
                getButton();
        },
        error:function(data){
                alert("请稍后再试");
        },
        dataType:"json",
    })
}
