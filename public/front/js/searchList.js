$(function(){
    //1. 获取地址栏中的key对应的值，设置到文本框search_input中
    var key = tools.getSearch("key");
    $(".search_input").val(key);
    //2. 页面加载需要渲染一次
    render();
    //3. 点击按钮，需要渲染一次
    $(".search_btn").on("click",function(){
        render();
    })
    //4. 点击排序的时候
    $(".lt_sort [data-type]").on("click",function(){
        var $this=$(this);
        if($this.hasClass("now")){
            $this.find("span").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        }else{
            $this.addClass("now").siblings().removeClass("now");
            $(".lt_sort span").removeClass("fa-angle-up").addClass("fa-angle-down");
        }
        render();
    })
      //需要发送ajax请求，获取后台的数据，把数据渲染到页面中。
    function render(){
        var param={};
        param.page=1;
        param.pageSize=100;
        param.proName=$(".search_input").val().trim();
        var $now=$(".lt_sort a.now");
        if($now.length>0){
            var type=$now.data("type");
            var value=$now.find("span").hasClass("fa-angle-down")?2:1;
            param[type]=value;
        }
        $.ajax({
            type:"get",
            url:"/product/queryProduct",
            data:param,
            success:function(info){
                // console.log(info);
                $(".lt_product").html(template("tpl",info));
            }
        })
    }
})