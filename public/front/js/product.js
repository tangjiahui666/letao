$(function(){
    var id=tools.getSearch("productId");
    // console.log(id);
    $.ajax({
        type:"get",
        url:"/product/queryProductDetail",
        data:{
            id:id
        },
        success:function(data){
            // console.log(data);
            $(".lt_main .mui-scroll").html(template("tpl",data));
            
            var gallery = mui('.mui-slider');
            gallery.slider({
              interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
            });
            mui( '.lt_pro_num' ).numbox();
            
        }
    });
   
    
})