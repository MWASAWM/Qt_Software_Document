$(function(){
    // myNav收缩展开
    $('.myNav-item>a').on('click',function(){
        if (!$('.myNav').hasClass('myNav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.myNav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('myNav-show').siblings('li').removeClass('myNav-show');
                
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.myNav-item.myNav-show').removeClass('myNav-show');
                
            }
        }
    });

    //myNav-mini切换
    $('#mini').on('click',function(){
        if (!$('.myNav').hasClass('myNav-mini')) {
            $('.myNav-item.myNav-show').removeClass('myNav-show');    
            $('.myNav-item').children('ul').removeAttr('style');
            $('.myNav').addClass('myNav-mini');
            document.getElementById('content').style.left="60px";
        }else{
            $('.myNav').removeClass('myNav-mini');
            document.getElementById('content').style.left="200px";
        }
    });
});