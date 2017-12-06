$(function () {
    /**
     * 使用jquery实现点击变色
     * @type {Element}
     */
    $(".nav").find("ul").delegate(
        "a", "click", function () {
            $(this).css("color", "rgb(193, 30, 43)");
            $(this).children(1).css("color", "rgb(193, 30, 43)");
            $(this).parent().siblings().children(0).css("color", "#000000");
            $(this).parent().siblings().children(0).children(1).css("color", "#000000");
        });
    /**
     * 鼠标滑动的效果
     */
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //document.documentElement.scrollTop = 100;
        var objDivs = document.querySelectorAll(".container>div");
        var objBanner1 = document.querySelector('.banner1');
        var objBanner2 = document.querySelector(".banner2");
        var objBanner3 = document.querySelector(".banner3");
        var objService = document.querySelector(".service_bg");
        var objDevelopment = document.querySelector(".development_bg");
        if (scrollTop > 0 && scrollTop < objBanner1.clientHeight) {
            /**
             * banner1的动画
             * @type {Element}
             */
            if (scrollTop > objBanner2.offsetTop - 50) {
                window.scrollTo(0, objBanner2.offsetTop);
            }
            animateBanner1(scrollTop, objBanner1);
        }
        else if (scrollTop > objBanner2.offsetTop && scrollTop < (objBanner2.offsetTop + objBanner2.clientHeight)) {
            /**
             * banner2的动画
             */
            animateBanner2(scrollTop, objBanner2);

        } else if (scrollTop > objService.offsetTop && scrollTop < (objService.offsetTop + objService.clientHeight)) {
            /**
             * service与development的动画
             */

            var objTitle = objService.querySelector('h1');
            animateBFontSize(scrollTop, objService, objTitle);

        } else if (scrollTop > objDevelopment.offsetTop && scrollTop < (objDevelopment.offsetTop + objDevelopment.clientHeight)) {
            /**
             * service与development的动画
             */

            var objTitle2 = objDevelopment.querySelector('h1');

            animateBFontSize(scrollTop, objDevelopment, objTitle2);

        } else if (scrollTop > objBanner3.offsetTop && scrollTop < (objBanner3.offsetTop + objBanner3.clientHeight)) {
            /**
             * banner3的动画
             */

            var objTitle3 = objBanner3.querySelector('h1');

            animateBFontSize(scrollTop, objBanner3, objTitle3);

        }

        function animateBanner1(scrollTop, objBanner1) {
            var objImgs = objBanner1.querySelectorAll('img');
            var objArticle = objBanner1.querySelector(".aricle1");
            objImgs[0].style.opacity = 1 - 1.0 / objBanner1.clientHeight * scrollTop;
            objImgs[1].style.opacity = 1 - 1.0 / objBanner1.clientHeight * scrollTop;
            objImgs[2].style.opacity = 1 - 1.0 / objBanner1.clientHeight * scrollTop;
            objArticle.style.opacity = 1 - 1.0 / objBanner1.clientHeight * scrollTop;
        }

        function animateBanner2(scrollTop, objBanner2) {
            var objTitle = objBanner2.querySelector('h1');
            objTitle.style.fontSize = (1 + 1.0 / objBanner2.clientHeight * (scrollTop - objBanner2.offsetTop)) * 100 + 'px';

        }

        function animateBFontSize(scrollTop, obj, objTitle) {
            objTitle.style.fontSize = (1 + 1.0 / obj.clientHeight * (scrollTop - obj.offsetTop)) * 70 + 'px';

        }
    };
});

