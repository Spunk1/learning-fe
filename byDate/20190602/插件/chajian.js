/* STEP1   判断是否引入了jQuery.js */
if(typeof(window.jQuery)!=="function"){         /* 全局中是否有jQuery的方法 */
    throw new Error("下拉列表组件依赖于jQuery.js");
}else{
    /* STEP2   添加实例方法，用于生成组件 */
    $.fn.chajian = function(){
        /* STEP2.1 侵入class样式和自定义扩展属性 */
        this.addClass("dropdown");
        this.children(":first").attr("data-trigger","dropdown")
                                .next().addClass("dropdown-menu");
        /* STEP2.2 查找元素 绑定事件，添加行为 */
        this.children(":first").mouseenter(function(){
            $(".dropdown>.dropdown-menu").addClass("in");
        })
                                .mouseleave(function(){
            $(".dropdown>.dropdown-menu").removeClass("in");
        });
    }
}