window.onload = function(){
var more = document.getElementById('more');
var m = document.getElementById('m');
more.addEventListener('mouseover',function(){
	m.style.display = 'block';
},false)
m.addEventListener('mouseover',function(){
	m.style.display = 'block';
},false)


more.addEventListener('mouseout',function(){
	m.style.display = 'none';
},false)
m.addEventListener('mouseout',function(){
	m.style.display = 'none';
},false)

var sub = document.getElementById('sub');
sub.addEventListener('click',function(){
	window.open('https://www.baidu.com');
},false)

}

































