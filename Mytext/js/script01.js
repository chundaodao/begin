window.onload = function(){
	//获取按钮
//	var btn01 = document.getElementById("mostW");
//	var btn02 = document.getElementById("mostH");
//	var btn03 = document.getElementById("changeColor");
//	var btn04 = document.getElementById("beHidden");
//	var btn05 = document.getElementById("reset");
//	//获取盒子
//	var change_box = document.getElementById("changeBox");
//	//为按钮绑定事件
//	btn01.onclick = function(){
//		change_box.style.width = "200px";
//	}
//	btn02.onclick = function(){
//		change_box.style.height = "200px";
//	}
//	btn03.onclick = function(){
//		change_box.style.backgroundColor = "red";
//	}
//	btn04.onclick = function(){
//		change_box.style.visibility = "hidden";
//	}
//	btn05.onclick = function(){
//		change_box.style.cssText = "";
//	}
	getBtn("mostW").onclick = function(){
		getBtn("changeBox").style.width = "200px";
	}
	getBtn("mostH").onclick = function(){
		getBtn("changeBox").style.height = "200px";
	}
	getBtn("changeColor").onclick = function(){
		getBtn("changeBox").style.backgroundColor = "red";
	}
	getBtn("beHidden").onclick = function(){
		getBtn("changeBox").style.visibility = "hidden";
	}
	getBtn("reset").onclick = function(){
		getBtn("changeBox").style.cssText = "";
	}
}
function getBtn(id){
	var btn =document.getElementById(id);
	return btn;
}
