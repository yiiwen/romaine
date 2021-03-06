$(document).ready(function(){

    showScroll();

    //返回顶部按钮事件
    $('#top').click(function(){
        $("html,body").animate({scrollTop:0},300);
    });

    //注册首页滚动数字事件
    scrollNum();
    //注册新闻页的按钮切换事件
    switchActive()
    //注册生成分页按钮
    if($(".pagelist").length > 0) {
        initPageList();
    }
    if ($("#allmap").length > 0) {
        initMap();
    }
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


//新闻页的按钮切换
function switchActive(){
    $(".news .newBtn").click(function(){
        $(".news .newBtn").removeClass("active");
        $(this).addClass("active");
    });
}


var initPageList = function(){
    const totalPage = $(".pagelist").attr("totalpage");
    const currentPage = $(".pagelist").attr("currentpage");
    const prevUrl = $(".pagelist").attr("prevurl");
    var html = '';
    //生成首页和上一页按钮
    if (currentPage == 1) {
        html +=`<span>首页</span>`;
        html +=`<span>上一页</span>`;
    } else {
        html += `<a href="${prevUrl}1">首页</span>`;
        html += `<a href="${prevUrl}${currentPage - 1}">上一页</a>`;
    }
    //生成中间数字按钮
    for (var i=1;i<=totalPage;i++){
        if (currentPage == i) {
            html +=`<a class="active" href="${prevUrl}${i}">${i}</a>`;
        } else {
            html +=`<a href="${prevUrl}${i}">${i}</a>`;
        }
    }
    //生成下一页和尾页按钮
    if (totalPage == currentPage) {
        html += `<span>下一页</span>`;
        html += `<span>尾页</span>`;
    } else {
        html += `<a href="${prevUrl}${currentPage*1+1}">下一页</span>`;
        html += `<a href="${prevUrl}${totalPage}">尾页</a>`;
    }
    $(".pagelist").append(html);
    console.log($(".pagelist").width());
}

var initMap = function() {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    var myGeo = new BMap.Geocoder();
    myGeo.getPoint("北京市海淀区上地10街", function(point){
        if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
        }else{
            alert("您选择地址没有解析到结果!");
        }
    }, "北京市");
}