// 二级分类显示与隐藏
$(".child").prev().on("click",function(){
    $(this).next().slideToggle();
})
// 侧边栏显示与隐藏
$(".icon_menu").on("click",function(){
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
})