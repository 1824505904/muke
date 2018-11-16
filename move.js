
//getStyle 获取样式
//startMove 运动主程序

		var oDiv1=document.getElementById('div1');
		var timer=null;
		var speed=0;
		
		//属性值的获取函数
		function getstyle (obj,name) {
				if (obj.currentStyle) {
					return obj.currentStyle[name]    //for  ie
				} else{
					return getComputedStyle(obj,false)[name]
				}
			}	
		
		function startMove (obj,json,fnEnd) {
			//停止上一次定时器
			clearInterval(obj.timer)   //关闭前一个定时器，解决对同个对象同时调用多个startMove()时，定时器叠加问题。使用obj.timer给每个调用Move()的对象赋予各自的定时器，防止多个对象同时调用startMove()时，同用一个定时器，而导致相关干扰问题。
			//保存对每一个物体运动的定时器
			obj.timer=setInterval (function () {
				//判断同时运动标志
				var bStop=true
				for(var attr in json){
				//取当前值
				var cur=0   //创建一个变量，用于存储attr属性每时每刻的值
				if (attr =='opacity') {
					//针对在其他浏览器中opacity属性值为浮点数值问题，将属性值  四舍五入，
					var cur=Math.round(parseFloat(getstyle(obj,attr)*100))
				} else{
					var cur=parseInt(getstyle(obj,attr))
				}
				
				speed=(json[attr]-cur)/5
				speed=speed>0? Math.ceil(speed):Math.floor(speed)
				
				if (cur !=json[attr]) {
					bStop=false
				}
				
				if (attr=='opacity') {
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100
					} else{
						obj.style[attr]=cur+speed+'px'
					}
				
				}
				
				
				if (bStop) {
					clearInterval(obj.timer)
					if (fnEnd) {
						fnEnd()
					}
				} 
		},30)
	}
			
//			oDiv1.onmouseover = function () {
//				startMove(this,{'width':400,'height':400,'opacity':100})   
//        	};
//          oDiv1.onmouseout = function () {
//          	startMove(this,{'width':200,'height':200,'opacity':30})   
//			};
