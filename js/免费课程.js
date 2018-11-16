$(".nav-item li a").hover(function() {
	$(this).css("color", "#fff")
}, function() {
	$(this).css("color", "")
})


//动画
$("#dowebok").hover(function() {
	$(this).addClass("bounce")
},function () {
	$(this).removeClass("bounce")
})


//导航的隐藏盒子
$(".app-load").hover(function() {
	$(this).find(".app-load-box").show()
}, function() {
	$(this).find(".app-load-box").hide()
})

$(".shop-cart").hover(function() {
	$(this).find(".my-cart").show()
}, function() {
	$(this).find(".my-cart").hide()
})

//尾部小圆点
//.page a.text-page-tag:hover
//$(".page a.text-page-tage").hover(function() {
//	$(this).css({"background":"#d9dde1","color":"#4d555d"})
//})

$(document).ready(function() {

	var i = 0;

	var clone = $(".banner .img li").first().clone(); //克隆第一张图片
	$(".banner .img").append(clone); //复制到列表最后
	var size = $(".banner .img li").size(); //返回匹配元素的数量
	console.log(size);

	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j = 0; j < size - 1; j++) {
		$(".banner .num").append("<li></li>");
	}

	$(".banner .num li").first().addClass("on");

	/*自动轮播*/

	var t = setInterval(function() {
		i++;
		move();
	}, 2000);

	/*鼠标悬停事件*/

	$(".banner").hover(function() {
		clearInterval(t); //鼠标悬停时清除定时器
	}, function() {
		t = setInterval(function() {
			i++;
			move();
		}, 2000); //鼠标移出时开始定时器
	});

	/*鼠标滑入原点事件*/

	$(".banner .num li").hover(function() {

		var index = $(this).index(); //获取当前索引值
		i = index;
		$(".banner .img").stop().animate({
			left: -index * 936
		}, 500);
		$(this).addClass("on").siblings().removeClass("on");
	});

	/*向左按钮*/
	$(".banner .btn_l").click(function() {
		i++;
		move();
	})

	/*向右按钮*/
	$(".banner .btn_r").click(function() {
		i--;
		move();
	})

	/*移动事件*/
	function move() {
		if (i == size) {
			$(".banner .img").css({
				left: 0
			});
			i = 1;
		}
		if (i == -1) {
			$(".banner .img").css({
				left: -(size - 1) * 936
			});
			i = size - 2;
		}
		$(".banner .img").stop().animate({
			left: -i * 936
		}, 936);

		if (i == size - 1) {
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
		} else {
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
	}
});

//全部就业隐藏盒子
$(".all-lujing ul li").hover(function() {
	$(this).
	$(".all-lujing ul li a").slideUp()
})

//一起学习轮播
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

//猿聘
$(".search-city .icon").on("mouseover",function() {
	$(".search-city-more").show()
})
$(".search-city .icon").on("mouseout",function() {
	$(".search-city-more").hide()
})


//弹窗

$(".set_btn a").click(function(){
	$("#signin").show();
})