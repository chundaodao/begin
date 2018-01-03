window.onload = function() {
	waterfall("main","box");
	window.onscroll = function() {
		var oParent = document.getElementById("main");
		var dataInt = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"}]};
		if (checkScrollSlide) {
			for (var i=0;i<dataInt.data.length;i++) {
				var oBox = document.createElement("div");
				oBox.className = "box";
				oParent.appendChild(oBox);
				var oBox2 = document.createElement("div");
				oBox2.className = "img";
				oBox.appendChild(oBox2);
				var oBox3 = document.createElement("img");
				oBox3.src ="img/"+ dataInt.data[i].src;
				oBox2.appendChild(oBox3);
			}
		waterfall("main","box");
		}
	}
}
function waterfall(parent,box) {
	//将main下的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);
	//试验 console.log(oBoxs.length);
	// 计算列数（页面宽/box的宽）
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText = "width:"+oBoxW*cols+"px;margin:0 auto";
	var hArr = [];
	for (var i=0;i <oBoxs.length;i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
		} else {
			var minH = Math.min.apply(null,hArr);
			//console.log(minH);console.log(hArr);
			var index = getMinhIndex(hArr,minH);
			oBoxs[i].style.position = "absolute";
			oBoxs[i].style.top = minH+"px";
			//oBoxs[i].style.left = index*oBoxW+"px";
			oBoxs[i].style.left = oBoxs[index].offsetLeft+"px";
			hArr[index]=hArr[index]+oBoxs[i].offsetHeight;
		}
	}
	
}
//根据class获取元素(针对只有单个class值)
function getByClass(parent,clsName) {
	var boxArr = new Array();
	oElements = parent.getElementsByTagName("*");
	for (var i = 0;i < oElements.length;i++) {
		if (oElements[i].className == clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;

}
//封装获取索引的函数
function getMinhIndex(arr,val) {
	for (var i in arr) {
		if (arr[i] == val) {
			return i;
		}
	}
}
//封装滚动判断加载函数
function checkScrollSlide() {
	var oParent = document.getElementById("main");
	var oBoxs = getByClass(oParent,"box");
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH < scrollTop+height)?true:false;

}