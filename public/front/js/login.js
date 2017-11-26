$(function(){
    $(".btn_login").on("click",function(){
        var username=$("[name='username']").val().trim();
        var password=$("[name='password']").val().trim();
        if(!username){
            mui.toast("请输入用户名");
            return false;
        }
        if(!password){
            mui.toast("请输入密码");
            return false;
        }
        $.ajax({
            type:"post",
            url:"/user/login",
            data:{
                username:username,
                password:password
            },
            success:function(info){
                // console.log(info);
                if(info.error===403){
                    mui.toast(info.message);
                }
                if(info.success){
                    var search=location.search;
                    if(search.indexOf("retUrl")!=-1){
                        search=search.replace("?retUrl=","");
                        location.href=search;
                    }else{
                        location.href="user.html";
                    }
                }
            }
        });
    });
});