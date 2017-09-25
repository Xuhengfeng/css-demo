$(function(){


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











	$(function(){
			var data=[];
			for(var i=0;i<=20;i++){
			rand=Math.floor(Math.random()*40+1);
			data.push({"id":"2","title":"魅蓝 Note5","price":"￥ 1099","pic":"images/s"+rand+".png"});

			}
			/*var data=[
			{"id":"1","title":"魅蓝 5s 32G版","price":"￥ 999","pic":"images+'/'+'s'+img+'.png'+"},
			{"id":"2","title":"魅蓝 Note5","price":"￥ 1099","pic":"images/s2.png"},
			{"id":"3","title":"Hi Case趣闪保护壳","price":"￥ 79","pic":"images/s3.png"},
			{"id":"4","title":"乐心心率手环MAMBO2","price":"￥ 169","pic":"images/s4.png"},
			{"id":"5","title":"暴风魔镜 小D 虚拟现实智能VR眼镜","price":"￥ 49","pic":"images/s5.png"},
			{"id":"6","title":"魅蓝 5","price":"￥ 699","pic":"images/s6.png"},
			{"id":"7","title":"魅蓝 X","price":"￥ 1699","pic":"images/s7.png"},
			{"id":"9","title":"魅蓝 Note3","price":"￥ 799","pic":"images/s8.png"},
			{"id":"9","title":"纽曼 NM-VR30 虚拟现实智能VR眼镜 ","price":"￥ 35.9","pic":"images/s9.png"},
			{"id":"10","title":"Beats Powerbeats3 Wireless蓝牙运动耳机","price":"￥ 1488","pic":"images/s10.png"},
			{"id":"11","title":"魅蓝3s","price":"￥ 699","pic":"images/s11.png"},
			{"id":"12","title":"魅族PRO 6s","price":"￥ 2499","pic":"images/s12.png"},
		]
	*/
	
		$(document).scroll(function(){
			
			var a=$(document).height();
			if($(document).scrollTop()>=a/2){
				var  str='';
				for(var i in data){
				//str重新赋值
				str+='<div class="list">';
				str+='<img src="'+data[i]['pic']+'">';
				str+='<p>'+data[i]['title']+'</p>';
				str+='<p>'+data[i]['price']+'</p>';
				str+='</div>';
				}
				
				//拿到数据给#main尾部添加
				$('.shop').append(str);
			}
		});
		
	})


















})