$(document).ready(function(){
    $('.newBtn').click(function(){
        $(".newBtn").removeClass("active");
        $(this).addClass("active");
        var width = $(".table-page").css("width");
        width = parseInt(width.substring(0,width.length -2)) -2;
        var time = setInterval(function(){
            $(".tab").each(function(){
                var left = $(this).css("left");
                left = parseInt(left.substring(0,left.length-2));
                left--;
                if (Math.abs(left) % width == 0){
                    clearInterval(time);
                    //将第一个转到最后
                    var length = $(".tab").length;
                    $(".table-page .active").css('left',(length-1) * (width-2) +"px");
                    if ($(this).css('left') == '1px'){
                        $(this).removeClass("active");
                        $(this).addClass('active');
                    }
                }
                $(this).css('left',left +'px');
            });
        },10);
    });
});