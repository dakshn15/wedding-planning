/*  jQuery Nice Select - v1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio  */
!function (e) { e.fn.niceSelect = function (t) { function s(t) { t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>')); var s = t.next(), n = t.find("option"), i = t.find("option:selected"); s.find(".current").html(i.data("display") || i.text()), n.each(function (t) { var n = e(this), i = n.data("display"); s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text())) }) } if ("string" == typeof t) return "update" == t ? this.each(function () { var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open"); n.length && (n.remove(), s(t), i && t.next().trigger("click")) }) : "destroy" == t ? (this.each(function () { var t = e(this), s = e(this).next(".nice-select"); s.length && (s.remove(), t.css("display", "")) }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this; this.hide(), this.each(function () { var t = e(this); t.next().hasClass("nice-select") || s(t) }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) { var s = e(this); e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus() }), e(document).on("click.nice_select", function (t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) { var s = e(this), n = s.closest(".nice-select"); n.find(".selected").removeClass("selected"), s.addClass("selected"); var i = s.data("display") || s.text(); n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change") }), e(document).on("keydown.nice_select", ".nice-select", function (t) { var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected")); if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1; if (40 == t.keyCode) { if (s.hasClass("open")) { var i = n.nextAll(".option:not(.disabled)").first(); i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus")) } else s.trigger("click"); return !1 } if (38 == t.keyCode) { if (s.hasClass("open")) { var l = n.prevAll(".option:not(.disabled)").first(); l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus")) } else s.trigger("click"); return !1 } if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1 }); var n = document.createElement("a").style; return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this } }(jQuery);

$(document).ready(function () {
    /******  Nice Select  ******/
    $('select').niceSelect();

    // /********* On scroll heder Sticky *********/
    function initHeaderSticky() {
        if (jQuery(document).height() > jQuery(window).height()) {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('.site-header').addClass("fixed");
            } else {
                jQuery('.site-header').removeClass("fixed");
            }
        }
    }

    $(document).ready(function () {
        initHeaderSticky()
    });
    $(window).on('resize scroll', function () {
        initHeaderSticky()
    });

    // /********* On scroll header back *********/
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header-sticky").style.top = "0";
        } else {
            document.getElementById("header-sticky").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
    }

    // mobile-menu
    $('.mobile-menu-button').on('click', function () {
        $('.menu-item-left').toggleClass('open')
        $(this).toggleClass('open-menu')
    })

    /** footer only one acnav open **/
    $(".acnav-label1").on("click", function () {
        if ($(window).width() < 768) {
            if ($(this).hasClass("is-open")) {
                $(this).removeClass("is-open");
                $(this).siblings(".acnav-list1").slideUp(200);
            } else {
                $(".acnav-label1").removeClass("is-open");
                $(this).addClass("is-open");
                $(".acnav-list1").slideUp(200);
                $(this).siblings(".acnav-list1").slideDown(200);
            }
        }
    });

    /****  TAB Js ****/
    $("ul.tabs li").click(function () {
        var $this = $(this);
        var $theTab = $(this).attr("data-tab");
        if ($this.hasClass("active")) {
        } else {
            $this
                .closest(".tabs-wrapper")
                .find("ul.tabs li, .tabs-container .tab-content")
                .removeClass("active");
            $(
                '.tabs-container .tab-content[id="' +
                $theTab +
                '"], ul.tabs li[data-tab="' +
                $theTab +
                "]"
            ).addClass("active");
        }
        $(this).addClass("active");
    });

    /******  STEPPY FORM  CSS  ******/
    $('.date-labls li').on('click', function () {
        $('.date-labls li').removeClass('active')
        $(this).addClass('active')
    })
    $('.time-labls li').on('click', function () {
        $('.time-labls li').removeClass('active')
        $(this).addClass('active')
    })

    var totalSteps = $(".steps li").length;
    $(".submit").on("click", function () {
        return false;
    });

    $(".steps li:nth-of-type(1)").addClass("active");
    $(".myContainer .step-container:nth-of-type(1)").addClass("active");

    $(".step-container").on("click", ".next", function () {
        $(".steps li").eq($(this).parents(".step-container").index() + 1).addClass("active");
        $(this).parents(".step-container").removeClass("active").next().addClass("active");
    });

    $(".step-container").on("click", ".back", function () {
        $(".steps li").eq($(this).parents(".step-container").index() - totalSteps).removeClass("active");
        $(this).parents(".step-container").removeClass("active").prev().addClass("active");
    });
    /******  STEPPY FORM  CSS  End******/

    // Back to top button
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /** service-slider **/


    var swiper = null; // Declare swiper variable outside the resize function scope
    var isSwiperInitialized = false; // Flag to track whether Swiper is initialized or not
    function initSwiper() {
        swiper = new Swiper(".service-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: true,
            speed: 800,
            freeMode: false,
            simulateTouch: false,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
            },
        });
    }
    function destroySwiper() {
        if (swiper !== null) {
            swiper.destroy();
            swiper = null;
        }
    }
    function handleSwiper() {
        if (jQuery(window).width() < 768) {
            if (!isSwiperInitialized) {
                initSwiper();
                isSwiperInitialized = true;
            }
        } else {
            if (isSwiperInitialized) {
                destroySwiper();
                isSwiperInitialized = false;
            }
        }
    }
    // Function to handle resizing
    function handleResize() {
        $(window).resize(function () {
            handleSwiper();
        }).trigger('resize'); // Trigger resize event on page load
    }
    // Call handleResize function on page load
    $(document).ready(function () {
        handleResize();
    });

    /** our-team-slider **/
    var swiper = new Swiper(".our-team-slider", {
        loop: true,
        slidesPerView: 3,
        autoplay: true,
        speed: 800,
        spaceBetween: 15,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /** portfolio-slider **/
    var swiper = new Swiper(".portfolio-slider", {
        loop: true,
        slidesPerView: 2,
        autoplay: true,
        centeredSlides: true,
        speed: 800,
        spaceBetween: 30,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /** testimonial-slider **/
    var swiper = new Swiper(".testimonial-slider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
        speed: 800,
        spaceBetween: 15,
        navigation: {
            nextEl: '.testimonial-arrow.swiper-button-next',
            prevEl: '.testimonial-arrow.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
        },
    });

    /** blog-slider **/
    var swiper = new Swiper(".blog-slider", {
        loop: true,
        slidesPerView: 3,
        autoplay: true,
        speed: 800,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /** image-gallery-slider **/
    var swiper = new Swiper(".image-gallery-slider", {
        loop: true,
        slidesPerView: 5,
        autoplay: true,
        speed: 800,
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            476: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });


});