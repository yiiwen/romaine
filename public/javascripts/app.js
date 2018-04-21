$(document).ready(function(){

    //新闻模块
    if ($(".table-page").length > 0) {
        initNewTab();
        newTabSwitch();
    }
    showScroll();

    //返回顶部按钮事件
    $('#top').click(function(){
        $("html,body").animate({scrollTop:0},300);
    });

    scrollNum();

});

//数字滚动
function scrollNum(){
    
    var num3 = 0;
    var time3 = setInterval(function(){
        $(".number").eq(3).text(num3+=10);
        if (num3 == parseInt($(".number").eq(3).attr("max"))) {
            $(".number").eq(3).text(num3 +"+");
            $(".number-abs").eq(3).show(100);
            clearInterval(time3);
        }
    },10);
    
    var num2 = 0;
    var time2 = setInterval(function(){
        $(".number").eq(2).text(num2+=2);
        if (num2 == parseInt($(".number").eq(2).attr("max"))) {
            $(".number").eq(2).text(num2 +"+");
            $(".number-abs").eq(2).show(100);
            clearInterval(time2);
        }
    },10);

    var num1 = 0;
    var time1 = setInterval(function(){
        $(".number").eq(1).text(num1++);
        if (num1 == parseInt($(".number").eq(1).attr("max"))) {
            $(".number").eq(1).text(num1 +"+");
            $(".number-abs").eq(1).show(100);
            clearInterval(time1);
        }
    },50);

    var num = 0;
    var time = setInterval(function(){
        $(".number").eq(0).text(num++);
        if (num == parseInt($(".number").eq(0).attr("max"))) {
            $(".number").eq(0).text(num +"+");
            $(".number-abs").eq(0).show(100);
            clearInterval(time);
        }
    },50);

    
    
}

//新闻标签页初始化
function initNewTab() {
    var width = $(".table-page").css("width");
    var height = $(".table-page").css("height");
    var size = $(".tab").length;
    width = parseInt(width.substring(0,width.length -2));
    $(".tab-content").css("width",size * width +"px");
    $(".tab-content").css("height",height);
    $(".tab").css('width',width).css("height",height);
}

//返回顶部代码
function showScroll(){
    var scrollValue=$(window).scrollTop();
    scrollValue > 200 ? $('#top').fadeIn():$('#top').fadeOut();
    $(window).scroll( function() { 
        var scrollValue=$(window).scrollTop();
        scrollValue > 200 ? $('#top').fadeIn():$('#top').fadeOut();
    } );
}

//新闻标签页切换
function newTabSwitch() {

    $('.newBtn').click(function(){
        $(".newBtn").removeClass("active");
        $(this).addClass("active");

        var width = $(".table-page").css("width");
        var index = $(this).index();
        var pointX = $(".tab-content").css("left")
        width = parseInt(width.substring(0,width.length -2));
        pointX = parseInt(pointX.substring(0,pointX.length -2));
        var shift = -(index * width);
        var speed = 1;
        
        if (shift ==pointX) {
            return true;   
        } else if (shift > pointX) {
            var time = setInterval(function(){
                if (Math.abs(shift - pointX) < speed ) {
                    speed =1;
                } else {
                    speed ++;
                }
                if (shift > pointX) {
                    pointX +=speed;
                    $(".tab-content").css("left",pointX+"px");
                } else {
                    clearInterval(time);
                }
            },10);    
        } else {
            var time = setInterval(function(){
                if (Math.abs(shift - pointX) < speed ) {
                    speed =1;
                } else {
                    speed ++;
                }
                if (shift < pointX) {
                    pointX -=speed;
                    $(".tab-content").css("left",pointX +"px");
                } else {
                    clearInterval(time);
                }
            },5);
        }
    });
}