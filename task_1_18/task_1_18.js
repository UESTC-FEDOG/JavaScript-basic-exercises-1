window.onload = function(){
	//绑定事件函数
function addEvent(element, type, handler){
	if(element.addEventListener){
		element.addEventListener(type, handler, false)
	}else if(element.attachEvent){
		element.attachEvent('on' + type, handler);
	}else{
		element['on' + type] = handler;
	}
}
	//向后插入函数
function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode; 
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

var text = document.getElementById('text');
var leftIn = document.getElementById('left-in');
var leftOut = document.getElementById('left-out');
var rightIn = document.getElementById('right-in');
var rightOut = document.getElementById('right-out');
var show = document.getElementById('show');
//初始化向左插入
addEvent(leftIn, 'click', function(){
	var a = document.createElement('a');
	if(text.value != ""){
	a.innerHTML = text.value;
	}else{
		alert('请输入内容！！！');
		return false;
	}
	show.insertBefore(a, show.firstChild);
})
//初始化向左移出
addEvent(leftOut, 'click', function(){
	if( show.firstChild != null){
		alert(show.firstChild.innerHTML);
		show.removeChild(show.firstChild);
	}else{
		alert('移出不了了！！！');
	}
})
//初始化向右加入
addEvent(rightIn, 'click', function(){
	var a = document.createElement('a');
	if(text.value != ""){
	a.innerHTML = text.value;
	}else{
		alert('请输入内容！！！');
		return false;
	}
	if(show.lastChild){
		insertAfter(a, show.lastChild);
	}else{
		show.insertBefore(a, show.firstChild);
	}
})
//初始化向右移出
addEvent(rightOut, 'click', function(){
	if( show.lastChild != null){
		alert(show.lastChild.innerHTML);
		show.removeChild(show.lastChild);
	}else{
		alert('移出不了了！！！');
	}
})
}