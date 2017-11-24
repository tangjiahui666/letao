$(function(){
    $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(info){
            // console.log(info);
            $(".lt_category_1 .mui-scroll").html(template("tpl_l",info));
            renderSecond(info.rows[0].id);
        }
    });
    function renderSecond(id){
        $.ajax({
            type:"get",
            url:"/category/querySecondCategory",
            data:{
                id:id
            },
            success:function(info){
                $(".lt_category_r .mui-scroll").html(template("tpl_r",info));
            }
        });
    }
    $(".lt_category_1 .mui-scroll").on("click","li",function(){
        $(this).addClass("now").siblings().removeClass("now");
        var id=$(this).data("id");
        renderSecond(id);
        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,500);
    })
})