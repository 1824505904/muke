var len = $("#box ul li").length;
var index = 0;

//点击切换下一张
$("#box #lick #next").click(function() {
	index++;
	if (index > len - 1) {
		index = 0;
	}
	$("#box ol li").removeClass("bg").eq(index).addClass("bg");
	$("#box ul li").hide().eq(index).show();
});

//点击切换上一张
$("#box #lick #prev").click(function() {
	index--;
	if (index < 0) {
		index = len - 1;
	}
	$("#box ol li").removeClass("bg").eq(index).addClass("bg");
	$("#box ul li").hide().eq(index).show();
});

//鼠标悬停小圆点
$("#box ol li").mouseover(function() {
	index = $(this).index()
	$("#box ul li").hide().eq(index).show();
	$("#box ol li").removeClass("bg").eq(index).addClass("bg");

})

//自动轮播
var right = function() {
	index++;
	if (index > len - 1) {
		index = 0;
	}
	$("#box ol li").removeClass("bg").eq(index).addClass("bg");
	$("#box ul li").hide().eq(index).show();
}
var timer = setInterval(right, 2000)

//鼠标悬停
$("#box").hover(function() {
	clearInterval(timer);
}, function() {
	timer = setInterval(right, 2000)
})