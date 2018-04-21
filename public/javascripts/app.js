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

});

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