function c(c) {
    console.log(c)
}
var mySwiper = new Swiper(".swiper-container1", {
    direction: 'vertical',
    //        autoplay: 2000,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    mousewheelControl: true,
    //        effect : 'cube',
    //        effect : 'flip',
    //        effect : 'fade',
    //        speed: 500,

    /*        onTransitionEnd: function(swiper){
            //console.log(mySwiper.activeIndex);
    
        }*/
    onTransitionEnd: function (swiper) {
        //            c(swiper.activeIndex);
        $("section div").removeClass("active");
        $("section").eq(swiper.activeIndex).find(".jb").addClass("active");
        $("nav li").removeClass("color");
        $("nav li").eq(swiper.activeIndex).addClass("color");
        if (swiper.activeIndex == 0) {

        } else {

        }
        if (swiper.activeIndex == 1) {
            setTimeout(function () {
                $(".experiences p").addClass("animated  fadeInUp opa_1");
                $(" .page2_cont span").addClass("animated fadeInUp opa_1");
                $(".experiences .li_01 ").addClass("ani_li1");
                $(".experiences .li_02 ").addClass("ani_li2");
                $(".experiences .li_03 ").addClass("ani_li3");
                $(".experiences .li_04 ").addClass("ani_li4");
                $(".experiences .li_05 ").addClass("ani_li5");
                $(".experiences .li_06 ").addClass("ani_li6");
                $(".experiences .li_07 ").addClass("ani_li7");
            }, 500)
        } else {
            $(".experiences p").removeClass("animated  fadeInUp opa_1");
            $(" .page2_cont span").removeClass("animated fadeInUp opa_1");
            $(".experiences .li_01 ").removeClass("ani_li1");
            $(".experiences .li_02 ").removeClass("ani_li2");
            $(".experiences .li_03 ").removeClass("ani_li3");
            $(".experiences .li_04 ").removeClass("ani_li4");
            $(".experiences .li_05 ").removeClass("ani_li5");
            $(".experiences .li_06 ").removeClass("ani_li6");
            $(".experiences .li_07 ").removeClass("ani_li7");
        }
        if (swiper.activeIndex == 2) {


            setTimeout(function () {
                // $("#content_thr h3").addClass("animated flip opa_1");
                $("#content_thr ul").addClass("animated fadeInLeft opa_1");
                $(".technology .language").addClass("animated   flipInY  opa_1");
                $(".technology .leiku").addClass("animated   flipInY  opa_1");
                $(".technology .kuangjia").addClass("animated   flipInY  opa_1");
                $(".technology .gongju").addClass("animated   flipInY  opa_1");
            }, 500)

            var num = 0;
            var speed = 0;
            setInterval(function () {
                $("#content_thr h3").addClass("animated flip opa_1");
                num++;
                if (num > 2) {
                    $("#content_thr h3").removeClass("animated flip");
                    num = 0;
                }

                // 
                $("#content_thr ul").css({
                    'box-shadow': '0px 0px ' + speed + 'px #00dfb9'
                });


                if (speed >= 30) {
                    speed -= 30;
                } else if (speed <= 0) {
                    speed += 30;
                } else {
                    speed += 30;
                }

            }, 1500);

            var myChart = null;
            setTimeout(function(){
                myChart= echarts.init(document.getElementById('main'));
                myChart.setOption(option, true);
            },1200)

        } else {
            $("#content_thr h3").removeClass("animated flip opa_1");
            $("#content_thr ul").removeClass("animated fadeInLeft  opa_1");
            $(".technology .language").removeClass("animated    flipInY opa_1");
            $(".technology .leiku").removeClass("animated    flipInY opa_1");
            $(".technology .kuangjia").removeClass("animated    flipInY opa_1");
            $(".technology .gongju").removeClass("animated    flipInY opa_1");
        }
        if (swiper.activeIndex == 3) {
            setTimeout(function () {
                $(".swiper-container2 ").addClass("animated zoomInDown opa_1");
                $(".page_four .demo").addClass("animated rubberBand opa_1");
            }, 500)
        } else {
            $(".swiper-container2").removeClass("animated zoomInDown opa_1");
            $(".page_four .demo").removeClass("animated rubberBand opa_1");
        }
        if (swiper.activeIndex == 4) {
            setTimeout(function () {
                $(".page_5-cont h2").addClass("animated bounceInDown opa_1");
                $(".page_5-cont ul").addClass("animated bounceInLeft opa_1");
            }, 500)
        } else {
            $(".page_5-cont h2").removeClass("animated bounceInDown opa_1");
            $(".page_5-cont ul").removeClass("animated bounceInLeft opa_1");
        }
        $("#content_thr h3").hover(function () {
            $("#content_thr h3").removeClass("animated flip ");
            $(this).addClass("animated flip");
        })

        $(".technology .skill ").click(function () {
            $(this).find("span,em").css({
                animation: "bordertwo .5s linear 0s infinite alternate"
            })
        }, function () {
            $(this).find("span,em").css({
                animation: "bordertwo2 2s linear 0s infinite alternate"
            })
        })

        function setTimeClick(i, x) {
            setTimeout(function () {
                $(".technology .skill").eq(i).click();
            }, 2000 * x);
        }

        setTimeClick(0, 1);
        setTimeClick(1, 2);
        setTimeClick(2, 3);
        setTimeClick(3, 4);

    },
    onInit: function () {


        $("nav li").click(function () {
            mySwiper.slideTo($(this).index(), 1000, true);
        })
        $(".text").hover(function () {
            $(".text").removeClass("animated rubberBand");
            $(this).addClass("animated rubberBand");
        })
        $("#mouseTip").click(function () {
            mySwiper.slideTo(1, 1000, true);
        })

        // 
        Array.from($(".text")).forEach(function (item, index) {
            setTimeout(function () {
                $(".text").removeClass("animated rubberBand");
                $(item).addClass("animated rubberBand");
            }, 1200 * index);
        });

        setTimeout(function () {
            $('.page_first aside img').css({
                transform: 'rotate(360deg)'
            });
        }, 3000);
    }
})
//---初始化第二个swiper
var myswiper2 = new Swiper(".swiper-container2", {
    autoplay: 3000,
    effect: 'coverflow',
    autoplayDisableOnInteraction: false,
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    /*        coverflow: {
            rotate: 30,
            stretch: 1,
            depth: 20,
            modifier: 2,
            slideShadows : true
        }*/

})
$('.workplace').hover(function () {
    myswiper2.stopAutoplay();
}, function () {
    myswiper2.startAutoplay();
})


window.option = {
    backgroundColor:'rgba(155,130,181,.1)',
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 76, 'Linus、Shell、Python'],
            [57.1, 64, 'Docker'],
            [74.4, 66, 'Nginx'],
            [50.1, 84, 'Mysql、Mongodb、Redis'],
            [89.7, 94, 'Express、Koa'],
            [68.1, 91, 'Node.js'],
            [19.6, 92, 'Vue'],
            [10.6, 95, 'JavaScript'],
            [32.7, 93, 'HTML5、CSS3']
        ]
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        axisLabel: {        
            show: true,
            textStyle: {
                color: '#EEEEE0',
            }
        },
    },
    yAxis: {
        type: 'category',
        axisLabel: {        
            show: true,
            textStyle: {
                color: '#EEEEE0',
            }
        },
    },
    series: [{
        type: 'bar',
        encode: {
            x: 'amount',
            y: 'product'
        },
        itemStyle: {
            normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function (params) {
                    // build a color map as your need.
                    var colorList = [
                        '#F8F8FF', '#F5F5DC','#F0FFF0','#EEDFCC','#FDF5E6','#D1EEEE','#FFFFF0','#FFFAF0','#FFFFE0'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        },
    }]
};