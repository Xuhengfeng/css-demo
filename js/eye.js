$(function(){

	$(document).scroll(function(){
		if($(document).scrollTop()>82){
			$('.fixed').fadeIn();
		}else{
			$('.fixed').fadeOut();
		}

	});


	var small=document.getElementById('small');
	var small_pic=document.getElementById('small_pic');
	var big=document.getElementById('big');
	var bigPic=document.getElementById('bigPic');
	var move=document.getElementById('move');
	var dian=document.getElementById('dian');
	var lis0=dian.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var lis1=dian.getElementsByTagName('ul')[1].getElementsByTagName('li');
	var lis2=dian.getElementsByTagName('ul')[2].getElementsByTagName('li');
	var lis3=dian.getElementsByTagName('ul')[3].getElementsByTagName('li');


	small.onmousemove=function(ent){
		move.style.display='block';
		
		var e=ent||event;

		var x=e.pageX;
		var y=e.pageY;
		
		var sl=small.offsetLeft;
		var st=small.offsetTop;

		var x=x-sl;
		var y=y-st;
		console.log(x+'--'+y);
	
		var w=move.offsetWidth/2;
		var h=move.offsetHeight/2;
		
		var x=x-w;
		var y=y-h;
		

		if(x<=0){
			x=0;
		}
		

		var maxLeft=small.offsetWidth-move.offsetWidth;
		if(x>=maxLeft){
			x=maxLeft;
		
		}
		

		if(y<=0){
			y=0;
		}
		
		var maxTop=small.offsetHeight-move.offsetHeight
		if(y>=maxTop){
			y=maxTop;
		}
		
		move.style.left=x+'px';
		move.style.top=y+'px';
		big.style.display='block';
		var bLeft=bigPic.offsetWidth*(x/small.offsetWidth);
		var bTop=bigPic.offsetHeight*(y/small.offsetHeight);
	
		bigPic.style.left=-bLeft+'px';
		bigPic.style.top=-bTop+'px';

		bigPic.src=small_pic.src;
		
	}
	small.onmouseout=function(){
		move.style.display='none';
		big.style.display='none';
	}

	for(var i=0;i<lis0.length;i++){
		lis0[i].onclick=function(){
			small_pic.src=this.firstElementChild.src;
			$(this).css('border','1px solid #eee').siblings().css('border','1px solid #fff');
		}
	}
	for(var i=0;i<lis1.length;i++){
		lis1[i].onclick=function(){
			small_pic.src=this.firstElementChild.src;
			$(this).css('border','1px solid #eee').siblings().css('border','1px solid #fff');
		}
	}
	for(var i=0;i<lis2.length;i++){
		lis2[i].onclick=function(){
			small_pic.src=this.firstElementChild.src;
			$(this).css('border','1px solid #eee').siblings().css('border','1px solid #fff');
		}
	}
	for(var i=0;i<lis3.length;i++){
		lis3[i].onclick=function(){
			small_pic.src=this.firstElementChild.src;
			$(this).css('border','1px solid #eee').siblings().css('border','1px solid #fff');
		}
	}







	// 颜色选择
	var color=$('#select-color>a');
	color.click(function(){
		var index=$(this).index();
		$(this).attr('id','color').siblings().removeAttr('id','color');
		$('#dian>ul').eq(index-1).show().siblings().hide();


	});



	// 手机简介
	$('.hd>ul>li').click(function(){
		$(this).addClass('check').siblings().removeClass('check');
		var index=$(this).index();
		$('#jj div').eq(index).show().siblings().hide();

	})








})