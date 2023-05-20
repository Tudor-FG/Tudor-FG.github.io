var boxs = document.querySelectorAll('.box');
// var time = 0;
var k = 10;
        
// 给所有 box 添加索引
for (let i = 0; i < boxs.length; i++) {
    boxs[i].setAttribute('data-index', i);
}

// 函数添加类实现样式改变
var goNext = function() {
    var img1 = boxs[k].querySelector("img");
    // 排他
    for (var j = 0; j < boxs.length; j++) {
        var img2 = boxs[j].querySelector('img');
		boxs[j].classList.remove('hoverbox');
        img2.classList.remove('hoverimg');
	}
    // 添加类
    boxs[k].classList.add('hoverbox');
    img1.classList.add('hoverimg');
}

var myTimer = function() {
    if(k > boxs.length-1) { 
        k = 0; 
    }
    // time++;
    // if(time == 15){
        goNext();
        k++;
        // time = 0;
    // }
}

var timer = setInterval(myTimer, 1000);

for(var i = 0; i < boxs.length; i++){
    boxs[i].onmouseover = function(){
        k = this.dataset.index;
        goNext();
        // time = 10;
        clearInterval(timer);
        
    };
 }

 for(var i = 0; i < boxs.length; i++){
    boxs[i].onmouseleave = function(){
        timer = setInterval(myTimer, 1000);
    };
 }

