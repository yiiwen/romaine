window.onload = function(){
    var newBtns = document.getElementsByClassName('newBtn');
    for(var i=0;i<newBtns.length;i++) {
        newBtns.item(i).onclick=function(){
            var className = '';
            for (var j=0;j<newBtns.length;j++) {
                className = newBtns.item(j).className;
                newBtns.item(j).className = className.replace(/active/,'');
            }
            this.className = this.className + ' active';
            //标签页切换
            var move = setInterval(function(){
                var ele = document.getElementsByClassName("table-page")[0].firstElementChild;
                if (!ele.style.left) {
                    ele.style.left = -1 +"px";
                } else {
                    var left = ele.style.left;
                    left = left.substring(0,left.length -2);
                    left = parseInt(left) - 1;
                    ele.style.left = left +"px";
                }
            },10);
        }
    }


}