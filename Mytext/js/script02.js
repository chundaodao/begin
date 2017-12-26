window.onload = function(){
	var btn01 = document.getElementById("red");
	var btn02 = document.getElementById("green");
	var btn03 = document.getElementById("black");
	var li = document.getElementsByTagName("li");
	btn01.onclick =function(){
		clearn();
		btn01.style.backgroundImage ="url(img/red.jpg)";
		
		for(var i =0;i<li.length;i++){
			li[i].style.backgroundColor = "red";
		}
	}
	btn02.onclick =function(){
		btn02.style.backgroundImage ="url(img/green.jpg)";
		for(var i =0;i<li.length;i++){
			li[i].style.backgroundColor = "green";
		}
	}
	btn03.onclick =function(){
		btn03.style.backgroundImage ="url(img/black.jpg)";
		for(var i =0;i<li.length;i++){
			li[i].style.backgroundColor = "black";
		}
	}
}




function clearn(){
	var btn01 = document.getElementById("red");
	var btn02 = document.getElementById("green");
	var btn03 = document.getElementById("black");
	btn01.style.backgroundImage ="";
	btn02.style.backgroundImage ="";
	btn03.style.backgroundImage ="";
}
//var data = {backgroundImage :"url(img/black.jpg)",}
//function changeColor(btn){
//	btn.onClick = function(){
//		btn.style.backgroundColor = 
//	}
//}
