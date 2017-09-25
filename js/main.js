$(function(){


	// 广告
	 $('#ad').animate({
        'marginTop': '0px','transition':'marginTop 3s ease'
    }, 3000,function(){
    	$('.ad-btn').click(function(){
    		$('#ad').slideUp("slow");
    	});
    })



	// 主菜单
    var num;
    $('.menu>ul>li[id]').hover(function(){
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(300);
    },function(){
        $('#box-'+num).hide();
    });

    $('.hidden-box').hover(function(){
        $(this).show();
    },function(){
        $(this).slideUp(200);
        $('#li-'+num).children().removeClass().addClass('hover-down');
    });


    // 弹出框
    $('.denglu').click(function(){
    	$('.pop').fadeIn();

    });
	$('.tab_title a').click(function(){
		$('.pop').fadeOut();
	});









    // 轮播图
    
    var now=0;
	var len=$('#banner>.img>li').length;
	function run(){
		s=setInterval(function(){
		$('#banner>.img>li').hide();
		$('#banner>.num>li').css('background','transparent');
		if (now>=len-1) {
			now=0;
		}else{
			now++;
		}
		$('#banner>.img>li:eq('+now+')').fadeIn();
		$('#banner>.num>li:eq('+now+')').css('background','#00c3f5');
		},2000);
	}
	run();

	$('#banner').mouseover(function(){
		clearInterval(s);
		$('.left,.right').show();
	}).mouseout(function(){
		run();
		$('.left,.right').hide();
	});


	$('#banner>.num>li').mouseover(function(){
		clearInterval(s);
		$('#banner>.img>li').hide();
		$('#banner>.num>li').css('background','transparent');
		now=$(this).index();
		$('#banner>.img>li:eq('+now+')').fadeIn();
		$('#banner>.num>li:eq('+now+')').css('background','#00c3f5');
	})

	$('.left').click(function(){
		now--;
		if (now<0) {
			now=len-1;
		}
		$('#banner>.img>li').hide();
		$('#banner>.num>li').css('background','transparent');
		$('#banner>.img>li:eq('+now+')').fadeIn();
		$('#banner>.num>li:eq('+now+')').css('background','#00c3f5');
	});
	

	$('.right').click(function(){
		now++;
		if (now>len-1) {
			now=0;
		}
		$('#banner>.img>li').hide();
		$('#banner>.num>li').css('background','transparent');
		$('#banner>.img>li:eq('+now+')').fadeIn();
		$('#banner>.num>li:eq('+now+')').css('background','#00c3f5');
	});


	// 热品推荐
	$('.button>.btn:eq(0)').click(function(){
		$('.btn:eq(0)').css({color:' #00c3f5',border:'1px solid #00c3f5',transition:'all .2s linear',color:'#00c3f5'});
		$('.btn:eq(1)').css({color:' #eee',border:'1px solid #eee',transition:'all .2s linear',color:'#eee'});
		$('.box .boxleft').animate({"left":"-1240px","transition":"all .3 ease"});
		$('.box .boxright').animate({"left":"0px","transition":"all .3 ease"});
	});
	$('.button>.btn:eq(1)').click(function(){
		$('.btn:eq(1)').css({color:' #00c3f5',border:'1px solid #00c3f5',transition:'all .2s linear',color:'#00c3f5'});
		$('.btn:eq(0)').css({color:' #eee',border:'1px solid #eee',transition:'all .2s linear',color:'#eee'});
		$('.box .boxright').animate({"left":"1240px","transition":"all .3 ease"});
		$('.box .boxleft').animate({"left":"0px","transition":"all .3 ease"});
	});



	// 数码配件
	var div_li=$('.shuma-tilte ul li');
		// console.log(div_li);
		div_li.mouseover(function(){
			$(this).addClass('selected').siblings().removeClass('selected');

			var index=$(this).index();
					// alert(index);

					$('.sm>div').eq(index).show().siblings().hide();


		});



// 定位导航
		
		$(document).scroll(function(){

			var a=$(document).height();
			if($(document).scrollTop()>a/2){
				$('#scroll').fadeIn();
			}else{
				$('#scroll').fadeOut();
			}



		});

		var speed = 1000;
		var h=document.body.clientHeight;
            $("#toTop").click(function () {
			  	$('html,body').animate({
					scrollTop: '0px'
				},
				speed);			
            });

		var windowHeight = parseInt($("body").css("height"));
		    $("#toBottom").click(function () {
		        $('html,body').animate({
					scrollTop: h+'px'
				},
				speed);
		    });

// 详情页定位导航
		$(document).scroll(function(){

			var b=$(document).height();
			if($(document).scrollTop()>100){
				$('#xq-scroll').fadeIn();
			}else if ($(document).scrollTop()==0) {
				$('#xq-scroll').hide();
			}



		});
		var speed1 = 1000;
            $(".xq-scrollItem2").click(function () {
			  	$('html,body').animate({
					scrollTop: '0px'
				},
				speed);			
            });



})

