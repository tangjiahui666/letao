// 二级分类显示与隐藏
$(".child").prev().on("click",function(){
    $(this).next().slideToggle();
})
// 侧边栏显示与隐藏
$(".icon_menu").on("click",function(){
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
})
// 退出功能
$(".icon_logout").on("click",function(){
    $("#logoutModal").modal("show");
    $(".btn_logout").off().on("click",function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            success:function(data){
                if(data.success){
                    location.href="login.html";
                }
            }
        })
    })
})