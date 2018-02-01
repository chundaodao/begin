window.onload = function() {
	faceChoose();
	popupPic();
    viewPic();
    toggleTabs();
	
	
//	脸型选择事件绑定
	function faceChoose() {
		var face_style = document.querySelectorAll(".face-select > li");
		var pics = document.querySelectorAll(".picture img");
		for (var p in face_style) {
			face_style[p].onclick = function() {
				for (var p in face_style) {
					face_style[p].className = "";
				}
				var indexs =  this.getAttribute("data-type").split(",");
				for (var i=0; i<pics.length; i++) {
						pics[i].style.display = "";
					if (indexs[0] == i || indexs[1] == i || indexs[2] == i || indexs[0] =="*") {
					
					} else {
						pics[i].style.display = "none";
					}
				}
				this.setAttribute("class","active");
			}
		}
	};
	
//	大脸图片事件绑定弹出
	function popupPic() {
		var mainBox = document.querySelector(".mainBox");
		var pics = document.querySelectorAll(".picture img");
		for (var i=0; i<pics.length; i++) {
			pics[i].onclick = function() {
	//			底层变透明

				mainBox.style.cssText= "opacity: 0;animation: third 1s;-webkit-animation: third 1s;";
			
				var img = document.createElement("img");
				img.setAttribute("src",this.src.replace("model","big"));
				img.style.cssText= "animation: myfirst 1s;-webkit-animation: myfirst 1s;position: absolute;left:0px;right:0px;top:0px;bottom:0px; margin: auto;";
				img.className = "big_face";
				
				var div = document.createElement("div");
					div.className = "newDiv";
				div.appendChild(img);
				var container = document.querySelector(".container");
				div.style.cssText = "width:428px;height:526px;position: absolute;left: 10px;top: 10px;";
				container.appendChild(div);
				img.onanimationend = function() {
					makingtools();
				};
				img.addEventListener("webkitAnimationEnd",function(){
					makingtools();
				});
				eyeglassTry(img);
			}
		};
	}
	
//	makingtools();
	function makingtools() {
		var mainBox = document.querySelector(".mainBox");
		var ul = document.createElement("ul"),
			li01 = document.createElement("li"),
			note01 = document.createTextNode("收缩"),
			li02 = document.createElement("li"),
			note02 = document.createTextNode("拍照"),
			li03 = document.createElement("li"),
			note03 = document.createTextNode("瞳距"),
			li04 = document.createElement("li"),
			note04 = document.createTextNode("重选");
		ul.appendChild(li01);
		ul.className = "tools";
		li01.appendChild(note01);
		li01.className = "colepase";
		ul.appendChild(li02);
		li02.appendChild(note02);
		ul.appendChild(li03);
		li03.appendChild(note03);
		ul.appendChild(li04);
		li04.appendChild(note04);
		li04.className = "reset";
		var container = document.querySelector(".container");
		container.appendChild(ul);
		
		//或者用innerHTML;
//		ul.innerHTML = "<li>收缩</li><li>拍照</li><li>瞳距</li><li>重选</li>";
//		绑定事件
		li04.onclick = function() {
			var big_face = document.querySelector(".big_face");
			if (big_face)big_face.style.left= "-1000px";
			var container = document.querySelector(".container");
			var div = document.querySelector(".newDiv");
			var ul = document.querySelector(".tools");
			ul.style.left = "-100px";
			if (document.querySelector(".glassImg")) {
					document.querySelector(".glassImg").parentNode.removeChild(document.querySelector(".glassImg"));
				}
			big_face.ontransitionend = function() {
				container.removeChild(div);
				mainBox.style.cssText = "opacity: 1; z-index: 2;";
				container.removeChild(ul);
				location.reload();
			};
			big_face.addEventListener("webkitTransitionEnd",function() {
				container.removeChild(div);
				mainBox.style.cssText = "opacity: 1; z-index: 2;";
				container.removeChild(ul);
				location.reload();
			});
			big_face.addEventListener("mozTransitionEnd",function() {
				container.removeChild(div);
				mainBox.style.cssText = "opacity: 1; z-index: 2;";
				container.removeChild(ul);
				location.reload();
			});
		}
	}
	
	//眼睛试戴
	function eyeglassTry(big_face) {
		var lis = document.querySelectorAll(".glassList li");
		lis[0].parentNode.classList.add("able");
		for (var i = 0; i<lis.length; i++) {
			lis[i].onclick = function() {
				for (var y =0;y<lis.length;y++) {
					lis[y].classList.remove("active");
				}
				this.classList.add("active");
//				this.classList.remove("active");
				if (document.querySelector(".glassImg")) {
					document.querySelector(".glassImg").parentNode.removeChild(document.querySelector(".glassImg"));
				}
				var img = document.createElement("img");
				var pic= this.querySelector("img");
				img.src = pic.src.replace(".jpg",".png");
				img.className = "glassImg";
				var newDiv = document.querySelector(".newDiv");
				if (newDiv) {
					newDiv.appendChild(img);
				}else {
					big_face.parentNode.appendChild(img);
				}
				img.style.cssText = "position: absolute;left: 60px;top: 162px;z-index: 5;";
				drag(img,big_face);
			}
			lis[i].onmouseenter = function() {
				this.classList.add("hover");
			}
			lis[i].onmouseleave = function() {
				this.classList.remove("hover");
			}
		}
	}
	
	// over obj,移动对象，big_face移动容器
	function drag(obj,big_face) {
				obj.onmousedown = function(event) {
					obj.style.position = "absolute";
					event = event || window.event;
					var ol = event.clientX - obj.offsetLeft;
					var ot = event.clientY - obj.offsetTop;
					document.onmousemove = function(event) {
						event = event || window.event;
						var left = event.clientX - ol;
						var top = event.clientY - ot;
						//var big_face = document.querySelector(".big_face");
						var maxLeft = big_face.offsetWidth-obj.offsetWidth;
						var maxTop = big_face.offsetHeight-obj.offsetHeight;
						obj.style.left = left+"px";
						
						obj.style.top = top+"px";
						parseInt(obj.style.left) < 0 && (obj.style.left = "0px");
						parseInt(obj.style.top) < 0 && (obj.style.top = "0px");
						parseInt(obj.style.left) > maxLeft && (obj.style.left = maxLeft+"px");
						parseInt(obj.style.top) > maxTop && (obj.style.top = maxTop+"px");
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
					return false;
				};
			}
	
	//选择自己的照片
    function viewPic() {
    	var input = document.getElementById("viewPicture");
    	var img = document.querySelector(".placeholder");
    	input.onchange = function() {
    		var src = window.URL.createObjectURL(input.files[0]);
    		img.src=src;
    		eyeglassTry(img);
    		//添加图片缩放按钮
    		var btn01 = document.querySelector("button.ms"),
    			btn02 = document.querySelector("button.ml"),
    			btn03 = document.querySelector("button.reset");
    			
    		btn01.onclick = function() {
    			if (img.width < 300) {
    				alert("你已经放到最小了");
    			} else {
    				img.width -= 5;
    			}
    		}
    		btn02.onclick = function() {
    			
    			img.width += 5;
    		}
    		btn03.onclick = function() {
    			img.width = 428;
    		}
    	}
    }
    
    function toggleTabs() {
    	//var tab_head = document.querySelector(".tab-head");
    	
    	var tab_head_lis = document.querySelectorAll(".tab-head > ul li");
    	var tab_content_divs = document.querySelectorAll(".tab-content > .tab-pane");
    	for (var i = 0; i<tab_head_lis.length;i++) {
    		tab_head_lis[i].index = i;
    		tab_head_lis[i].onclick = function() {
    			this.parentNode.querySelector("[class='active']").classList.remove("active");
    			this.classList.add("active");
    			
    			for (var j =0; j<tab_content_divs.length; j++) {
    				tab_content_divs[j].classList.remove("active");
    			}
      			tab_content_divs[this.index].classList.add("active");
    		}	
    	}
    }
    //图片预加载
    
}
addLoadEvent(preload);

function preload() {
	var img = new Image(),
	arr = ["img/big_1.jpg","img/big_2.jpg","img/big_3.jpg","img/big_4.jpg","img/big_5.jpg","img/big_6.jpg","img/big_7.jpg","img/big_8.jpg","img/big_9.jpg","img/big_10.jpg","img/big_11.jpg","img/big_12.jpg","img/glass_1.png","img/glass_2.png","img/glass_3.png","img/glass_4.png","img/glass_5.png","img/glass_6.png","img/glass_7.png","img/glass_8.png","img/glass_9.png","img/glass_10.png","img/glass_11.png","img/glass_12.png"];
	for (var i = 0; i<arr.length; i++) {
		img.src = arr[i];
	}
}



function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function" ) {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

