

// 登录框
$(function(){


	$('.d3').click(function(){
        $('.d2').css('color','#7f7f7f') 
        $('.d3').css('color','#00c3f5')
        $('.form2').show().prev().hide();

    });


    $('.d2').click(function(){
        $('.d2').css('color','#00c3f5') 
        $('.d3').css('color','#7f7f7f')
        $('.form1').show().next().hide();
      
    });

  // 弹出框
})








$(function(){
        
        var i1=document.getElementsByClassName('i1')[0];
        var i11=document.getElementsByClassName('i11')[0];
        var s1=document.getElementsByClassName('s1')[0];
        var s2=document.getElementsByClassName('s2')[0];
        var i3=document.getElementsByClassName('i3')[0];



        console.log(i3);
        i3.onclick=function(){
        
        //简单的正则
        var pattern=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var reg=/^[a-z0-9_-]{6,18}$/;
        
        //检测用户是否输入
            if(i1.value==''){
                s1.innerHTML='用户名不能为空';
            }else{
                if (pattern.test(i1.value)) {
                    s1.innerHTML='用户名设置正确';
                }else{
                    s1.innerHTML='用户名格式错误,请重新输入';
                    i1.value='';
                }
            }


            if(i11.value==''){
                s2.innerHTML='密码不能为空';
            }else{
                if (reg.test(i11.value)) {
                    s2.innerHTML='密码设置正确';
                }else{
                    s2.innerHTML='密码格式错误，请重新输入';
                    i11.value='';
                }
            }


            if(pattern.test(i1.value)&&reg.test(i11.value)){

                alert('恭喜你！账号注册成功，点击确定进入魅族商城');
                $('.i3').attr('href','index.html');

            }

        }


        $('form>input').focus(function(){
            $('.s1').text(' ');
            $('.s2').text(' ');
        });
    

    // 扫码登录
    $('.a-btn').toggle(
        function(){
            $('.a-btn').children().attr('src','images/pc.png');
            $('.sao').show();
        },
        function(){
            $('.sao').hide();
            $('.a-btn').children().attr('src','images/qr.png');
        }
    )

})

