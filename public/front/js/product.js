$(function(){
    var productId=tools.getSearch("productId");
    // console.log(id);
    $.ajax({
        type:"get",
        url:"/product/queryProductDetail",
        data:{
            id:productId
        },
        success:function(data){
            // console.log(data);
            
            $(".lt_main .mui-scroll").html(template("tpl",data));
            
            var gallery = mui('.mui-slider');
            gallery.slider({
              interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
            });
            mui( '.mui-numbox' ).numbox();
            $(".lt_size span").on("click",function(){
                // console.log(111);
                $(this).addClass("now").siblings().removeClass("now");
            })
        }
    });
   
    $(".btn_add_cart").on("click",function(){
        // console.log(111);
        var size=$(".lt_size span.now").text();
        if(!size){
            mui.toast("请选择尺码");
            return false;
        }
        var num=$(".mui-numbox-input").val();
        $.ajax({
            type:"post",
            url:"/cart/addCart",
            data:{
                productId:productId,
                num:num,
                size:size
            },
            success:function(info){
                // console.log(info);
                if(info.success){
                    mui.confirm("添加成功","温馨提示",["去购物车", "继续浏览"],function(e){
                        if(e.index==0){
                            location.href="cart.html";
                        }
                    })
                }
                if(info.error==400){
                    location.href="login.html?retUrl="+location.href;
                }
            }
        });
    });
});