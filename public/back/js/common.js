// 进度条
// 禁用进度环
NProgress.configure({ showSpinner: false });
$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },500);
});

// 非登录页面，判断当前用户是否是登陆了，如果登录了，就继续，如果没登陆，需要跳转到登陆页面
 if(location.href.indexOf("login.html")==-1){
    $.ajax({
        type:"get",
        url:"/employee/checkRootLogin",
        success:function(data){
            if(data.error===400){
              location.href="login.html";  
            }
        }
    })
 }
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