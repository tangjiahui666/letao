$(function(){
    // 1. 渲染搜索列表
    function getHistory(){
        var history=localStorage.getItem("lt_search_history")||"[]";
        var arr=JSON.parse(history);
        return arr;
    }

    function render(){
        var arr=getHistory();
        $(".lt_history").html(template("tpl",{arr:arr}))
    }
    render();
    
    //2. 清空搜索列表
    $(".lt_history").on("click",".btn_empty",function(){
        mui.confirm("您是否要清空所有的历史记录?","温馨提示",["取消","确定"],function(e){
            if(e.index==1){
                localStorage.removeItem("lt_search_history");
                render();
            }
        })

    });
    

    //3. 删除搜索列表
    $(".lt_history").on("click",".btn_delete",function(){
        var that=this;
        mui.confirm("你确定要删除吗","温馨提示",["否","是"],function(e){
            if(e.index===1){
                var arr=getHistory();
                var index=$(that).data("index");
                arr.splice(index,1);
                localStorage.setItem("lt_search_history",JSON.stringify(arr));
                render();
            }
        });
    });

     //4. 添加搜索列表
     $(".search_btn").on("click",function(){
         var key=$(".search_input").val().trim();
         if(key===""){
             mui.toast("请输入搜索关键字");
             return false;
         }
         var arr=getHistory();
         var index=arr.indexOf(key);
         if(index!=-1){
             arr.splice(index,1);
         }
         if(arr.length>=10){
             arr.pop();
         }
         arr.unshift(key);
         localStorage.setItem("lt_search_history",JSON.stringify(arr));
         render();

         //跳转页面
     })
})