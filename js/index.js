$(function () {
    // 初始化fullpage组件
    // 1、设置每一个屏幕的背景颜色
    // 2、设置屏幕内容的对齐方式，默认是垂直居中，改成顶部对齐
    // 3、设置导航、指示器、点容器
    // 4、监听进入某一屏幕时回调
    $('.container').fullpage({
        // 配置参数
        sectionsColor:  ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function(link,index) {
            $('.section').eq(index-1).addClass('now');
        },
        /*离开某一个页面的时候触发*/
        onLeave:function (index,nextIndex,direction) {
            var currentSection = $('.section').eq(index-1);
            var nextSection = $('.section').eq(nextIndex-1);
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                currentSection.addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                currentSection.addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第五页到第六页*/
                /*currentSection.removeClass('now').addClass('leaved');*/
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
                // nextSection.addClass('ok');
            }else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },


        afterRender:function () {

            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            $('.screen08').on('mousemove',function (e) {
                //鼠标的坐标设置给手
                $(this).find('.hand').css({
                    left:e.clientX-190,
                    top:e.clientY-20,
                })
            }).find('.again').on('click',function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);

            })

        },
        /*页面切换的时间 默认是700*/
        scrollingSpeed:1000
    });




});