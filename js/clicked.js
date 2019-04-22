$(function(){
    $('#rjxxBtn').on('click',function(){
        $.ajax({url:"../childHtml/软件信息.html",success:function(result){      
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');          
        }});
    })
    
    $('#xzffBtn').on('click',function(){
        $.ajax({url:"../childHtml/选择方法.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#yxffBtn').on('click',function(){
        $.ajax({url:"../childHtml/运行方法.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#tzffBtn').on('click',function(){
        $.ajax({url:"../childHtml/停止方法.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#lssjBtn').on('click',function(){
        $.ajax({url:"../childHtml/历史数据.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#yqztBtn').on('click',function(){
        $.ajax({url:"../childHtml/仪器状态.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#gjBtn').on('click',function(){
        $.ajax({url:"../childHtml/关机.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#gjgnBtn').on('click',function(){
        $.ajax({url:"../childHtml/高级功能.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    $('#tcBtn').on('click',function(){
        $.ajax({url:"../childHtml/退出.html",success:function(result){
            $("#content").html(result);
            $('html,body').animate({scrollTop: 0},'slow');
        }});
    })
    
});