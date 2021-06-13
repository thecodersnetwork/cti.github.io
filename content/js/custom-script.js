! function(e) {
    "use strict";
    for (var t = "", i = "", a = 1, s = 1; a < 4;) t += '<span class="line line-' + a + '"></span>', a++;
    for (e(".lines").prepend(t); s < 5;) i += '<span class="overlay overlay-' + s + '"></span>', s++;
    if (e(".overlays").prepend(i), e(".fullscreen-footer").length < 1 && e(".site-footer").prepend('<span class="footer-ov"></span><span class="footer-ov"></span><span class="footer-ov"></span><span class="footer-ov"></span>'), e(".projects-nav").length > 0 && e(".projects-nav").prepend('<span class="np-ov"></span><span class="np-ov"></span><span class="np-ov"></span><span class="np-ov"></span>'), e(".clients-list").length) {
        const t = e(".clients-list");
        t.slick({
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: false,
            nextArrow: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
             
            ]
          }), t.on("wheel", function(t) {
            t.preventDefault(), t.originalEvent.deltaY < 0 ? e(this).slick("slickNext") : e(this).slick("slickPrev")
        })
    }
    if (e(".team-members").length) {
        const t = e(".team-members");
        
        t.slick({
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: false,
            nextArrow: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
             
            ]
          }), t.on("wheel", function(t) {
            t.preventDefault(), t.originalEvent.deltaY < 0 ? e(this).slick("slickNext") : e(this).slick("slickPrev")
        })
    }
    e(".accordion-title").length && e(".accordion-title").each(function(t) {
        e(this).on("mouseenter", function(t) {
            e(this).find(".accordion-content").slideDown()
        }), e(this).on("mouseleave", function(t) {
            e(this).find(".accordion-content").slideUp()
        })
    });
    var n = e("body"),
        o = e(".page-settings"),
        l = o.data("layout");
    if (null != l) {
        var r = "layout-" + l;
        n.addClass(r)
    }
    var d = o.data("header-style");
    if (null != d) {
        e(".site-header").addClass(d)
    }
    var c = o.data("menu-style");
    if (null != c) {
        e(".site-navigation").addClass(c)
    }
    var p = o.data("menu-layout");
    if (null != p) {
        e(".site-navigation").addClass(p)
    }
    var u = o.data("background");
    if (null != u) {
        n.css("background", u), e(".np-ov").css("background", u)
    }
    e(".single-project").length > 0 && e(".site-footer").addClass("project-footer"), e(".menu > li > a").each(function() {
        var t = e(this).text();
        "#" === e(this).attr("href") && e(this).addClass("no-trans"), e(".site-navigation").hasClass("classic") ? e(this).wrapInner('<span data-hover="' + t + '"></span>') : e(this).attr("data-hover", t)
    }), e(".menu > li").on("mouseenter", function() {
        e(".menu > li").removeClass("menu-item-hover"), e(this).addClass("menu-item-hover")
    }), e(".menu > li").on("mouseleave", function() {
        e(".menu > li").removeClass("menu-item-hover"), e(".menu > li.menu-item-active").addClass("menu-item-hover")
    });
    var h = e(".scrolling-button div").marquee({
        duplicated: !0,
        delayBeforeStart: 0
    });
    h.marquee("pause"), e(".site-navigation").hasClass("classic") || (e(".sub-menu > .menu-item.has-children").on("mouseenter", function() {
        e(".sub-menu .sub-menu").removeClass("sub-sub-in"), e(this).children(".sub-menu").addClass("sub-sub-in")
    }), e(".menu > .menu-item.has-children > .sub-menu").on("mouseleave", function() {
        e(".sub-menu .sub-menu").removeClass("sub-sub-in")
    })), e(".site-navigation").prepend('<span class="menu-ov menu-ov-1"></span><span class="menu-ov menu-ov-2"></span><span class="menu-ov menu-ov-3"></span><span class="menu-ov menu-ov-4"></span>'), e(".menu-toggle").prepend('<span class="toggle-line toggle-line-1"></span><span class="toggle-line toggle-line-2"></span>'), e(".menu-toggle").on("click", function() {
        var t = e(this).data("clicks");
        t ? (setTimeout(function() {
            e(".site-header").removeClass("dark-nav-active light-nav-active"), e(".site-navigation").removeClass("nav-open")
        }, 380), e(".sub-toggle").removeClass("st-in"), e(".sub-menu").removeClass("sub-menu-in"), e(".sub-toggle").removeClass("st-active"), e(".sub-menu .sub-menu").removeClass("sub-sub-in"), e(".menu-wrapper").css("visibility", "hidden"), h.marquee("pause"), e(this).removeClass("is-active"), e(".menu-ov").removeClass("menu-ov-in"), e(".menu > li > a").each(function(t, i) {
            e(i).delay(20 * t).queue(function(t) {
                e(this).removeClass("menu-item-comes"), t()
            })
        }), e(".mww-1, .mww-2").removeClass("mww-in"), e(".widget-socials li").removeClass("so-li-in")) : (e(".site-navigation").addClass("nav-open"), e(".menu-wrapper").css("visibility", "visible"), e(this).addClass("is-active"), e(".menu-ov").addClass("menu-ov-in"), h.marquee("resume"), e(".site-navigation").hasClass("light") ? setTimeout(function() {
            e(".site-header").addClass("light-nav-active")
        }, 150) : setTimeout(function() {
            e(".site-header").addClass("dark-nav-active")
        }, 150), setTimeout(function() {
            e(".menu > li > a").each(function(t, i) {
                e(i).delay(30 * t).queue(function(t) {
                    e(this).addClass("menu-item-comes"), t()
                })
            })
        }, 200), setTimeout(function() {
            e(".mww-1, .mww-2").addClass("mww-in"), e(".widget-socials li").each(function(t, i) {
                e(i).delay(40 * t).queue(function(t) {
                    e(this).addClass("so-li-in"), t()
                })
            })
        }, 300), setTimeout(function() {
            e(".sub-toggle").addClass("st-in")
        }, 500)), e(this).data("clicks", !t)
    }), e(".menu-item a").not(".no-trans").on("click", function() {
        e(".menu li").removeClass("menu-item-active"), e(this).parents("li").addClass("menu-item-active"), setTimeout(function() {
            e(".sub-menu").removeClass("sub-menu-in"), e(".sub-toggle").removeClass("st-active"), e(".sub-toggle").removeClass("st-in")
        }, 5), e(".menu-wrapper").css("visibility", "hidden"), h.marquee("pause"), e(".menu > li > a").each(function(t, i) {
            e(i).delay(20 * t).queue(function(t) {
                e(this).removeClass("menu-item-comes"), t()
            })
        }), setTimeout(function() {
            e(".site-navigation").removeClass("nav-open")
        }, 300), e(".mww-1, .mww-2").removeClass("mww-in"), e(".widget-socials li").removeClass("so-li-in"), e(".menu-toggle").data("clicks", !1)
    }), e(window).outerWidth() < 850 && e(".site-navigation").removeClass("classic"), e(".site-navigation .menu > li.menu-item.has-children").each(function() {
        e(this).prepend('<i class="sub-toggle  icon-plus"><i>')
    }), e(".sub-toggle").on("click", function() {
        e(this).toggleClass("st-active"), e(this).parent("li").children(".sub-menu").toggleClass("sub-menu-in")
    }), e(".has-animation").length > 0 && (e(".has-animation").each(function() {
        e(this).attr("data-scroll", "true");
        var t = e(this).data("delay") + "s",
            i = e(this).data("duration") + "s";
        e(this).css({
            transitionDelay: t,
            transitionDuration: i
        })
    }), e(".lines-up, .lines-down, .lines-fade-up, .lines-fade-down").each(function() {
        e(this).splitLines({
            tag: '<div><span class="split-line"></div>',
            keepHtml: !0
        }), e(this).find(".split-line").each(function(t) {
            var i = t / 7.5,
                a = e(this).parents(".has-animation").data("delay");
            if (null == a) var s = i + "s";
            else s = a + i + "s";
            e(this).css({
                transitionDelay: s
            })
        })
    })), e(window).on("load", function() {
        var t = anime({
            targets: ".line",
            height: "100%",
            duration: 3e3,
            delay: 0,
            easing: "easeInOutCubic",
            begin: function(t) {
                e(".cygni-loader").addClass("in")
            },
            complete: function(t) {
                e(".cygni-loader").addClass("out"), setTimeout(function() {
                    e("#main").addClass("loaded")
                }, 100), setTimeout(function() {
                    var e = new LocomotiveScroll({
                        el: document.querySelector("#main"),
                        smooth: !1
                    });
                    window.peScroll = e
                }, 250), e(".portfolio-showcase").length < 1 && (setTimeout(function() {
                    e(".site-navigation").hasClass("classic") ? e(".site-navigation.classic .menu > li > a > span").each(function(t, i) {
                        e(i).delay(75 * t).queue(function(t) {
                            e(this).addClass("span-in"), t()
                        })
                    }) : e(".toggle-line").addClass("toggle-line-in")
                }, 1500), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in")
                }, 1900)), setTimeout(function() {
                    e(".menu-item-active").addClass("menu-item-hover")
                }, 1e3)
            }
        });
        if (window.loadingAn = t, anime({
                targets: ".cygni-loader",
                bottom: "100%",
                duration: 3e3,
                delay: 0,
                easing: "easeInOutCubic"
            }), anime({
                targets: ".cygni-loader .counter",
                innerHTML: [0, 100],
                round: 1,
                duration: 3e3,
                delay: 0,
                easing: "easeInOutCubic",
                update: function(t) {
                    var i = e(".cygni-loader .counter").html();
                    i < 10 ? e(".cygni-loader .counter").prepend("00") : i >= 10 && i < 100 && e(".cygni-loader .counter").prepend("0")
                }
            }), e(".portfolio-grid").length) {
            e(".grid-project").each(function(t) {
                for (t++; t >= 6;) t -= 5;
                e(this).addClass("width-" + t)
            }), e(".grid-project-cat, .grid-project-title, .grid-project-index").each(function() {
                e(this).wrapInner("<span></span>")
            });
            var i = e(".portfolio-grid").masonry({
                itemSelector: ".grid-project",
                columnWidth: ".pg-sizer",
                gutter: 0,
                percentPosition: !0
            });
            i.imagesLoaded().progress(function() {
                i.masonry("layout"), e(".width-1").each(function() {
                    var t = e(this),
                        i = t.nextAll(".width-3").first().outerHeight();
                    t.css({
                        marginBottom: i / 2
                    })
                }), e(".width-3").each(function() {
                    var t = e(this),
                        i = t.nextAll(".width-5").first(),
                        a = (t.outerHeight(), i.outerHeight());
                    t.css({
                        marginBottom: a
                    })
                }), e(".width-3").last().addClass("no-mar"), e(".width-5").each(function() {
                    var t = e(this),
                        i = t.prevAll(".width-3").first().outerHeight();
                    t.css({
                        marginTop: i / 2
                    })
                }), e(".width-2").each(function() {
                    var t = e(this),
                        i = t.prevAll(".width-1").first().outerHeight();
                    t.css({
                        marginTop: i / 2
                    })
                })
            })
        }
        if (e(".detailed").length) {
            e(".plus-button a").prepend('<span class="line-s"></span><span class="line-s"></span>');
            var a = e(".detailed-project:nth-child(1)").find("a").attr("href");
            e(".detailed-button").wrapInner('<a href="' + a + '"><p></p></a>'), e(".detailed-button").prepend("<span></span><span></span><span></span><span></span>"), e(".plus-button a").on("mouseenter", function() {
                e(this).parent(".plus-button").addClass("pb-active")
            }), e(".plus-button").on("mouseleave", function() {
                e(this).removeClass("pb-active")
            }), e(".detailed-images").prepend('<div class="swiper-wrapper"></div>'), e(".detailed-project").each(function(t) {
                t++, e(this).addClass("project-" + t);
                var i = e(this).find(".project-image").html();
                e(".detailed-images .swiper-wrapper").append('<div class="swiper-slide" data-slide="' + t + '"><div class="detailed-image"><div class="slide-bgimg">' + i + "</div></div></div>")
            });
            var s = .7,
                n = (new Swiper(".detailed-images", {
                    mousewheel: {
                        invert: !1,
                        eventsTarged: ".detailed-portfolios"
                    },
                    navigation: {
                        nextEl: ".detailed-next",
                        prevEl: ".detailed-prev"
                    },
                    pagination: {
                        el: ".detailed-dots",
                        type: "bullets",
                        clickable: !0,
                        bulletClass: "detailed-dot",
                        bulletActiveClass: "dot-index-active",
                        renderBullet: function(e, t) {
                            return ' <span class="' + t + '"><span class="dot-index">0' + (e + 1) + "</span></span>"
                        }
                    },
                    slidesPerView: 1,
                    direction: "vertical",
                    speed: 1200,
                    parallax: !0,
                    watchSlidesProgress: !0,
                    on: {
                        init: function() {
                            var t = e(".swiper-slide-active").data("slide");
                            e(".project-" + t).addClass("dp-active"), e(".project-year, .project-category, .project-excerpt").wrapInner("<span></span>"), e(".project-title").each(function() {
                                e(this).splitLines({
                                    tag: '<div><span class="dpt-line"></div>',
                                    keepHtml: !0
                                })
                            })
                        },
                        progress: function() {
                            let e = this;
                            for (let t = 0; t < e.slides.length; t++) {
                                let i = e.slides[t].progress * (e.width * s);
                                e.slides[t].querySelector(".slide-bgimg").style.transform = "translateY(" + i + "px)"
                            }
                        },
                        setTransition: function(e) {
                            let t = this;
                            for (let i = 0; i < t.slides.length; i++) t.slides[i].style.transition = e + "ms", t.slides[i].querySelector(".slide-bgimg").style.transition = e + "ms"
                        },
                        slideNextTransitionStart: function() {
                            anime({
                                autoplay: !1,
                                loop: !1,
                                translateX: [0, 25],
                                opacity: [1, 0],
                                easing: "easeInCubic",
                                duration: 600,
                                targets: ".dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span",
                                delay: anime.stagger(50, {
                                    from: "last"
                                })
                            }).restart()
                        },
                        slideNextTransitionEnd: function() {
                            anime({
                                autoplay: !1,
                                loop: !1,
                                translateX: [-25, 0],
                                opacity: [0, 1],
                                easing: "easeOutCubic",
                                duration: 600,
                                targets: ".dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span",
                                delay: anime.stagger(50)
                            }).restart()
                        },
                        slidePrevTransitionStart: function() {
                            anime({
                                autoplay: !1,
                                loop: !1,
                                translateX: [0, -25],
                                opacity: [1, 0],
                                easing: "easeInCubic",
                                duration: 600,
                                targets: ".dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span",
                                delay: anime.stagger(50, {
                                    from: "last"
                                })
                            }).restart()
                        },
                        slidePrevTransitionEnd: function() {
                            anime({
                                autoplay: !1,
                                loop: !1,
                                translateX: [25, 0],
                                opacity: [0, 1],
                                easing: "easeOutCubic",
                                duration: 600,
                                targets: ".dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span",
                                delay: anime.stagger(50)
                            }).restart()
                        },
                        transitionEnd: function() {
                            e(".detailed-project").removeClass("dp-active");
                            var t = e(".swiper-slide-active").data("slide"),
                                i = ".project-" + t;
                            e(i).addClass("dp-active"), e(".detailed-fraction .current").html("0" + t);
                            var a = e(i).find("a").attr("href");
                            e(".detailed-button a").attr("href", a)
                        }
                    }
                }), e(".detailed-dot").length);
            e(".detailed-fraction .total").html("0" + n), t.finished.then(function() {
                var t = anime({
                    autoplay: !1,
                    loop: !1,
                    translateX: [-25, 0],
                    opacity: [0, 1],
                    easing: "easeOutCubic",
                    duration: 1e3,
                    targets: ".project-year span, .project-excerpt span, .project-meta, .project-category span",
                    delay: anime.stagger(50)
                });
                anime({
                    autoplay: !1,
                    loop: !1,
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    easing: "easeOutCubic",
                    duration: 1e3,
                    targets: ".project-title > div",
                    delay: anime.stagger(100)
                }).play(), setTimeout(function() {
                    e(".detailed").addClass("dt-loaded")
                }, 500), setTimeout(function() {
                    t.play(), e(".detailed-dot").each(function(t, i) {
                        e(i).delay(175 * t).queue(function(t) {
                            e(this).addClass("dot-in"), t()
                        })
                    })
                }, 1500), setTimeout(function() {
                    e(".detailed-button").addClass("db-loaded"), e(".plus-button").addClass("pb-in")
                }, 2500), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in"), e(".toggle-line").addClass("toggle-line-in")
                }, 2e3)
            })
        }
        if (e(".list-titles").length > 0) {
            e(".line").addClass("line-arange"), e(".list-image").each(function(t) {
                var i = t + 1,
                    a = e(this).attr("data-index", "slide-" + i),
                    s = (e(this).attr("data-slide", i), e(".list-image").length);
                e(".lt-total").text("0" + s);
                var n = e(this).data("index");
                e(this).addClass(n), window.slide = a;
                var o = e(this).find(".list-p-title").text();
                window.title = o
            });
            s = .5;
            var o = new Swiper(".list-images", {
                slidesPerView: "auto",
                speed: 750,
                spaceBetween: 250,
                watchSlidesProgress: !0,
                parallax: !0,
                navigation: {
                    nextEl: ".lc-next",
                    prevEl: ".lc-prev"
                },
                pagination: {
                    el: ".list-titles",
                    type: "bullets",
                    bulletClass: "list-title",
                    clickable: !1,
                    renderBullet: function(e, t) {
                        return '<a href="" data-push="' + e + '"data-select="' + (".slide-" + (e + 1)) + '" class="list-title"></a>'
                    }
                },
                containerClass: "list-images",
                centeredSlides: !0,
                on: {
                    transitionStart: function() {
                        var t = e(".swiper-slide-active").data("slide");
                        e(".lt-current").text("0" + t), e(".swiper-slide-active").hasClass("dark") ? e(".list-carousel").addClass("dark-slide-init") : e(".list-carousel").removeClass("dark-slide-init")
                    }
                },
                breakpoints: {
                    850: {
                        centeredSlides: !1
                    }
                }
            });
            e(".list-title").each(function() {
                var t = e(this).data("select"),
                    i = e(t).find(".list-p-title").text(),
                    a = e(t).find("a").attr("href");
                e(this).attr("href", a), e(this).text(i), e(this).attr("data-hover", i)
            }), e(".list-title").on("mouseenter", function() {
                var t = e(this).data("push");
                o.slideTo(t)
            }), e(".list-titles").on("mouseenter", function() {
                e(".list-scroll").removeClass("hidden")
            }), e(".list-titles").on("mouseleave", function() {
                e(".list-scroll").addClass("hidden")
            }), e(".list-titles").prepend('<span class="scroll-rat"></span>'), e(".list-titles").append('<span class="scroll-rat"></span>'), Scrollbar.init(document.querySelector(".list-titles")), t.finished.then(function() {
                setTimeout(function() {
                    e(".list-image").each(function(t, i) {
                        e(i).delay(250 * t).queue(function(t) {
                            e(this).addClass("ino"), t()
                        })
                    }), e(".line").removeClass("line-arange")
                }, 200), setTimeout(function() {
                    e(".list-title").each(function(t, i) {
                        e(i).delay(100 * t).queue(function(t) {
                            e(this).addClass("ino"), t()
                        })
                    })
                }, 1e3), setTimeout(function() {
                    e(".lc-prev i, .lc-next i").addClass("ino"), e(".lt-current, .lt-total").addClass("ino")
                }, 1250), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in")
                }, 1500), setTimeout(function() {
                    e(".toggle-line").addClass("toggle-line-in"), e(".list-carousel").addClass("list-init")
                }, 2e3)
            })
        }
        if (e(".vertical-projects").length > 0 && (e(".vertical-image-wrapper").each(function() {
                if (e(this).find("video").length > 0) {
                    var t = e(this).find("video"),
                        i = t.outerHeight();
                    e(this).wrapInner('<div class="vertical-anim-holder"></div>'), e(this).css("height", i + "px"), t.css({
                        width: "auto",
                        position: "absolute"
                    })
                } else {
                    var a = e(this).find("img"),
                        s = a.outerHeight();
                    e(this).wrapInner('<div class="vertical-anim-holder"></div>'), e(this).css("height", s + "px"), a.css({
                        width: "auto",
                        position: "absolute"
                    })
                }
            }), e(".vertical-item-title").each(function(t) {
                e(this).splitLines({
                    tag: '<div><span class="title-line"></div>',
                    keepHtml: !0
                });
                e(this).find("div")
            }), t.finished.then(function() {
                setTimeout(function() {
                    var e = new LocomotiveScroll({
                        el: document.querySelector(".vertical-projects"),
                        smooth: !0,
                        offset: ["10%", 0]
                    });
                    window.verticalScroll = e
                }, 250), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in")
                }, 1e3), setTimeout(function() {
                    e(".toggle-line").addClass("toggle-line-in"), e(".vertical-projects").addClass("vertical-init")
                }, 1500)
            }), e("a").on("click", function() {
                verticalScroll.destroy()
            })), e(".big-slider").length > 0) {
            e("body").css("overflow", "hidden"), e(".line").addClass("line-arange"), e(".portfolio-showcase").addClass("loading"), e(".big-slider-item .title, .big-slider-item .summary").each(function() {
                e(this).splitLines({
                    tag: '<div><span class="span-line"></div>',
                    keepHtml: !0
                })
            }), e(".big-slider-item .year, .big-slider-item .category, .big-slider-item .meta div").each(function() {
                e(this).wrapInner("<span></span>")
            }), e(".big-slider-overlays").prepend('<span class="bs-ov bs-ov-1"></span><span class="bs-ov bs-ov-2"></span><span class="bs-ov bs-ov-3"></span><span class="bs-ov bs-ov-4"></span>'), e(".bs-splitted").append('<div class="big-images swiper-container"><div class="swiper-wrapper"></div></div>'), e(".big-slider-item").each(function() {
                var t = e(this);
                if (t.find("video").length > 0) {
                    var i = t.find("source").attr("src");
                    e(".bs-splitted .swiper-wrapper").append('<div class="swiper-slide"><div class="big-image"><video playsinline autoplay muted loop class="big-video-split"><source type="video/mp4" src="' + i + '"></video></div></div>');
                    e(".big-video-split")
                } else {
                    var a = e(this).find("img").attr("src");
                    e(".bs-splitted .swiper-wrapper").append('<div class="swiper-slide"><div class="big-image"><img src="' + a + '"></div></div>')
                }
            }), e(".big-slide-button").wrapInner('<div class="project-url"><p class="bsb-link"><p></div>'), e(".big-slide-button .project-url").prepend("<span></span><span></span><span></span><span></span>"), e(".bsb-link").wrapInner("<wrap></wrap>");
            var l = e(".big-slider-item a:first-child").attr("href");
            e(".big-slide-button .project-url").attr("href", l);
            var r = new Swiper(".big-slider", {
                    mousewheel: {
                        invert: !1
                    },
                    slidesPerView: 1,
                    navigation: {
                        nextEl: ".big-slide-next",
                        prevEl: ".big-slide-prev"
                    },
                    pagination: {
                        el: ".bs-bullets",
                        type: "bullets",
                        clickable: !0,
                        renderBullet: function(e, t) {
                            return '<span class="' + t + '">0' + (e + 1) + "</span>"
                        }
                    },
                    loop: !1,
                    direction: "vertical",
                    virtualTranslate: !0,
                    watchSlidesProgress: !0,
                    containerModifierClass: "big-slider-",
                    slideClass: "big-slider-item",
                    containerClass: "big-slider",
                    wrapperClass: "big-slider-wrapper",
                    slideActiveClass: "big-item-active",
                    slideNextClass: "big-item-next",
                    slidePrevClass: "big-item-prev"
                }),
                d = anime.timeline({
                    autoplay: !1,
                    loop: !1,
                    targets: ".title .span-line"
                }).add({
                    translateY: ["0", "-110%"],
                    easing: "easeInExpo",
                    duration: 650,
                    complete: function(e) {
                        d.pause()
                    }
                }).add({
                    translateY: ["110%", "0"],
                    easing: "easeOutExpo",
                    duration: 650
                }),
                c = anime.timeline({
                    duration: 700,
                    autoplay: !1,
                    loop: !1,
                    targets: ".title .span-line"
                }).add({
                    translateY: ["0", "110%"],
                    easing: "easeInExpo",
                    complete: function(e) {
                        c.pause()
                    }
                }).add({
                    translateY: ["-110%", "0"],
                    easing: "easeOutExpo"
                });
            window.titleAnimNext = d, window.titleAnimPrev = c, e(".big-slider-item").addClass("bs-inactive"), e(".big-slider-item.big-item-active").addClass("bs-active"), e(".big-image").addClass("big-image-anim");
            s = .45;
            var p = new Swiper(".big-images", {
                navigation: {
                    nextEl: ".big-slide-next",
                    prevEl: ".big-slide-prev"
                },
                slidesPerView: 1,
                mousewheel: {
                    invert: !1
                },
                pagination: {
                    el: ".bs-bullets",
                    type: "bullets",
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '">0' + (e + 1) + "</span>"
                    }
                },
                loop: !1,
                autoplay: {
                    delay: 1e4,
                    waitForTransition: !1,
                    disableOnInteraction: !1
                },
                speed: 1300,
                direction: "vertical",
                parallax: !0,
                watchSlidesProgress: !0,
                on: {
                    progress: function() {
                        let e = this;
                        for (let t = 0; t < e.slides.length; t++) {
                            e.slides[t].progress, e.width
                        }
                    },
                    setTransition: function(e) {
                        let t = this;
                        for (let i = 0; i < t.slides.length; i++) t.slides[i].style.transition = e + "ms", t.slides[i].querySelector(".big-image").style.transition = e + "ms"
                    },
                    transitionStart: function() {
                        e(".big-slider .title .span-line").css({
                            transition: "auto"
                        }), e(".bs-ov").addClass("trans-start")
                    },
                    transitionEnd: function() {
                        e(".big-slider-item").removeClass("bs-active"), e(".big-slider-item.big-item-active").addClass("bs-active"), e(".swiper-pagination-bullet-active").removeClass("progress-init"), setTimeout(function() {
                            e(".swiper-pagination-bullet-active").addClass("progress-init")
                        }, 1);
                        var t = e(".big-slider-item.big-item-active a").attr("href");
                        e(".big-slide-button .project-url").attr("href", t)
                    },
                    slideNextTransitionStart: function() {
                        var e = anime.timeline({
                            easing: "easeInOutCubic",
                            duration: 600,
                            autoplay: !1,
                            loop: !1,
                            targets: ".bs-ov",
                            delay: function(e, t) {
                                return 50 * t
                            }
                        }).add({
                            translateY: ["100%", "0"],
                            complete: function(t) {
                                e.pause()
                            }
                        }).add({
                            translateY: ["0", "-100%"]
                        });
                        window.overlayAnimNext = e, e.restart(), d.restart()
                    },
                    slideNextTransitionEnd: function() {
                        setTimeout(function() {
                            d.play(), overlayAnimNext.play()
                        }, 1)
                    },
                    slidePrevTransitionStart: function() {
                        var e = anime.timeline({
                            easing: "easeInOutCubic",
                            duration: 600,
                            autoplay: !1,
                            loop: !1,
                            targets: ".bs-ov",
                            delay: function(e, t) {
                                return 30 * t
                            }
                        }).add({
                            translateY: ["-100%", "0"],
                            complete: function(t) {
                                e.pause()
                            }
                        }).add({
                            translateY: ["0", "100%"]
                        });
                        window.overlayAnimPrev = e, c.restart(), e.restart()
                    },
                    slidePrevTransitionEnd: function() {
                        setTimeout(function() {
                            c.play(), overlayAnimPrev.play()
                        }, 1)
                    }
                }
            });
            e(".swiper-pagination-bullet-active").addClass("progress-init"), p.controller.control = r, t.finished.then(function() {
                e(".portfolio-showcase").removeClass("loading"), setTimeout(function() {}, 800), setTimeout(function() {
                    e(".big-slide-pag i").addClass("anim-in")
                }, 1500), setTimeout(function() {
                    e(".bs-bullets .swiper-pagination-bullet").each(function(t, i) {
                        e(i).delay(200 * t).queue(function(t) {
                            e(this).addClass("anim-in"), t()
                        })
                    })
                }, 1250), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in")
                }, 1500), setTimeout(function() {
                    e(".toggle-line").addClass("toggle-line-in")
                }, 2e3)
            })
        }
        if (e(".all-projects").length > 0 && (e(".all-projects .project").each(function(t) {
                e(this).addClass("anim-ready");
                var i = "image-" + t,
                    a = ".image-" + t;
                e(this).attr("data-image", a);
                var s = e(this).find(".featured-image").attr("src"),
                    n = e(this).find(".summary").text(),
                    o = e(this).find(".category").text(),
                    l = e(this).find(".meta").html();
                e(".all-projects-metas").append('<div class="all-project-meta ' + i + '"><div class="category"><span>' + o + '</span></div><div class="meta-summ"><div class="meta">' + l + '</div><div class="summary">' + n + "</div></div></div>"), e(".projects-images").append('<div class="pe-project-image ' + i + '"><img src="' + s + '"></div>');
                var r = e(this).attr("data-category");
                e(this).addClass("category-" + r), e(this).addClass("category-all")
            }), e(".all-projects-cats li").each(function() {
                e(this).wrapInner('<span class="anim-ready"><span>');
                var t = e(this).text();
                e(this).attr("data-hover", t)
            }), e(".all-projects-cats li").on("click", function() {
                if (!e(this).hasClass("cat-active")) {
                    var t = e(this).attr("class");
                    e(".all-projects-cats li").removeClass("cat-active"), e(this).addClass("cat-active");
                    var i = e(".all-projects").find(".project"),
                        a = 50 * e(".all-projects").find(".project:visible").length + 300;
                    i.each(function(i, s) {
                        var n = e(this);
                        e(s).delay(50 * i).queue(function(e) {
                            n.addClass("up"), e()
                        }), setTimeout(function() {
                            n.hasClass(t) ? (n.css("display", "block"), n.addClass("ready")) : n.css("display", "none")
                        }, a)
                    }), setTimeout(function() {
                        e(".ready").each(function(t, i) {
                            e(i).delay(50 * t).queue(function(t) {
                                e(this).removeClass("up ready"), t()
                            })
                        })
                    }, a + 20)
                }
            }), e(".project").on("mouseenter", function() {
                e(this).hasClass("light") && e(".portfolio-showcase").addClass("light-init");
                var t = e(this).data("image");
                e(t).addClass("image-show"), e(".project").addClass("project-hidden"), e(this).removeClass("project-hidden")
            }), e(".project").on("mouseleave", function() {
                e(".project").removeClass("project-hidden"), e(".pe-project-image").removeClass("image-show"), e(".all-project-meta").removeClass("image-show"), e(".portfolio-showcase").removeClass("light-init")
            })), e(".products-horizontal").length > 0) {
            e(".products-horizontal").prepend('<span class="hor-ov"></span><span class="hor-ov"></span><span class="hor-ov"></span>'), e(".line").addClass("line-arange"), e(".products-horizontal .title").each(function() {
                e(this).wrapInner("<span></span>")
            }), e(".products-horizontal-images").addClass("swiper-container"), e(".products-horizontal-images").append('<div class="swiper-wrapper"></div>'), e(".horizontal-item").each(function(t) {
                var i = t + 1;
                e(this).attr("data-index", i);
                var a = e(this).find(".title").text();
                if (e(this).find(".title").attr("data-hover", a), e(this).find("video").length > 0) {
                    var s = e(this).find(".horizontal-image").html();
                    e(".products-horizontal-images .swiper-wrapper").append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg">' + s + "</div></div></div>")
                } else {
                    var n = e(this).find(".horizontal-image img").attr("src"),
                        o = e(this).find(".horizontal-image").find(".details").parent().html();
                    e(".products-horizontal-images .swiper-wrapper").append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg"><img src="' + n + '">' + o + "</div></div></div>")
                }
            });
            s = .5;
            (m = new Swiper(".products-horizontal-images", {
                mousewheel: {
                    invert: !1
                },
                slidesPerView: 1,
                speed: 800,
                parallax: !0,
                watchSlidesProgress: !0,
                on: {
                    progress: function() {
                        let e = this;
                        for (let t = 0; t < e.slides.length; t++) {
                            let i = e.slides[t].progress * (e.width * s);
                            e.slides[t].querySelector(".slide-bgimg").style.transform = "translateX(" + i + "px)"
                        }
                    },
                    setTransition: function(e) {
                        let t = this;
                        for (let i = 0; i < t.slides.length; i++) t.slides[i].style.transition = e + "ms", t.slides[i].querySelector(".slide-bgimg").style.transition = e + "ms"
                    }
                }
            })).on("slideChange", function() {
                var t = e(".swiper-slide-active").data("index") - 1;
                e(".nested li").removeClass("active"), e(".nested li").eq(t).addClass("active")
            }), e(".nested li").each(function() {
                e(this).on("click", m, function() {
                    e(".nested li").removeClass("active"), e(this).addClass("active"), m.slideTo(e(this).index())
                })
            }), e(".products-horizontal-titles .swiper-slide").each(function() {
                var t = e(this).find(".title").outerWidth();
                e(this).css("width", t)
            });
            var h = new Swiper(".products-horizontal-titles", {
                mousewheel: {
                    invert: !1
                },
                slidesPerView: 1,
                speed: 800,
                navigation: {
                    nextEl: ".horizontal-next",
                    prevEl: ".horizontal-prev"
                },
                centeredSlides: !0,
                slideClass: "horizontal-item",
                wrapperClass: "horizontal-wrapper",
                containerClass: "products-horizontal-titles",
                pagination: {
                    el: ".horizontal-progress",
                    type: "progressbar",
                    renderProgressbar: function(e) {
                        return '<span class="hor-current">1</span><span class="' + e + '"></span><span class="hor-total"></span>'
                    }
                }
            });
            n = e(".horizontal-item").length;
            e(".hor-total").text(n), e(".hor-total").prepend("0");
            a = e(".horizontal-item.swiper-slide-active").find(".project-url").attr("href");
            e(".horizontal-project-link a").attr("href", a), h.on("slideChangeTransitionEnd", function() {
                var t = e(".horizontal-item.swiper-slide-active").find(".project-url").attr("href");
                e(".horizontal-project-link a").attr("href", t)
            }), e(".hor-current").prepend("0"), h.on("slideChangeTransitionEnd", function() {
                var t = e(".swiper-slide-active").data("index");
                e(".hor-current").text(t), e(".hor-current").prepend("0")
            }), h.controller.control = m, m.controller.control = h, e(".horizontal-next").on("click", function() {
                var t = e(".swiper-slide-active").data("index") - 1;
                e(".nested li").removeClass("active"), e(".nested li").eq(t).addClass("active")
            }), e(".horizontal-prev").on("click", function() {
                var t = e(".swiper-slide-active").data("index") - 1;
                e(".nested li").removeClass("active"), e(".nested li").eq(t).addClass("active")
            }), t.finished.then(function() {
                setTimeout(function() {
                    e(".products-horizontal-titles .title span").each(function(t, i) {
                        e(i).delay(1 * t).queue(function(t) {
                            e(this).addClass("anim-in"), t()
                        })
                    }), e(".products-horizontal-images").addClass("init")
                }, 350), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in"), e(".toggle-line").addClass("toggle-line-in"), e(".hor-ov").addClass("anim-in")
                }, 1250), setTimeout(function() {
                    e(".products-horizontal-titles").addClass("hor-init"), e(".horizontal-progress, .horizontal-project-link, .horizontal-pagination").addClass("anim-in")
                }, 1650)
            })
        }
        if (e(".products-preview").length) {
            var v = e(".products-wrapper:not(.slick-initialized)");
            v.each(function() {
                e(this).closest(".horizontal-next");
                e(this).slick({
                    speed: 500,
                    fade: !0,
                    infinite: !0,
                    cssEase: "ease-in-out",
                    touchThreshold: 100,
                    swipe: !0,
                    swipeToSlide: !0,
                    nextArrow: e(this).parent().find(".horizontal-next"),
                    prevArrow: e(this).parent().find(".horizontal-prev")
                });
                var t = e(this).find(".slick-slide").length;

                function i(t) {
                    e(".horizontal-fraction").find(".hor-current").text(t + 1)
                }
                e(".horizontal-fraction").find(".hor-total").text(t), v.on("wheel", function(t) {
                    t.preventDefault(), t.originalEvent.deltaY < 0 ? e(this).slick("slickNext") : e(this).slick("slickPrev")
                }), v.on("init", function(a, s) {
                    s.slideCount, e(".horizontal-fraction").find(".hor-total").text(t), i(s.currentSlide)
                }), v.on("beforeChange", function(e, t, a, s) {
                    i(s)
                }), e(this).on("beforeChange", function(t, i, a, s) {
                    var n = s;
                    e(this).parent().parent().parent().parent().find(".products-names li").length;
                    e(this).parent().parent().parent().parent().find(".products-names li").removeClass("active"), e(this).parent().parent().parent().parent().find(".products-names li").eq(n).addClass("active")
                })
            })
        }
        if (e(".scrollto").click(function(t) {
                t.preventDefault();
                var i = e(this).attr("data-attr-scroll"),
                    a = e("#" + i).attr("data-scroll-offset");
                a || (a = 0), e("html,body").animate({
                    scrollTop: e("#" + i).offset().top - a
                }, 500)
            }), e(".cygni-horizontal").length > 0) {
            e(".cygni-horizontal").prepend('<span class="hor-ov"></span><span class="hor-ov"></span><span class="hor-ov"></span>'), e(".line").addClass("line-arange"), e(".cygni-horizontal .title").each(function() {
                e(this).wrapInner("<span></span>")
            }), e(".cygni-horizontal-images").addClass("swiper-container"), e(".cygni-horizontal-images").append('<div class="swiper-wrapper"></div>'), e(".horizontal-item").each(function(t) {
                var i = t + 1;
                e(this).attr("data-index", i);
                var a = e(this).find(".title").text();
                if (e(this).find(".title").attr("data-hover", a), e(this).find("video").length > 0) {
                    var s = e(this).find(".horizontal-image").html();
                    e(".cygni-horizontal-images .swiper-wrapper").append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg">' + s + "</div></div></div>")
                } else {
                    var n = e(this).find(".horizontal-image img").attr("src");
                    e(".cygni-horizontal-images .swiper-wrapper").append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg"><img src="' + n + '"></div></div></div>')
                }
            });
            s = .5;
            var m = new Swiper(".cygni-horizontal-images", {
                mousewheel: {
                    invert: !1
                },
                slidesPerView: 1,
                speed: 800,
                parallax: !0,
                watchSlidesProgress: !0,
                on: {
                    progress: function() {
                        let e = this;
                        for (let t = 0; t < e.slides.length; t++) {
                            let i = e.slides[t].progress * (e.width * s);
                            e.slides[t].querySelector(".slide-bgimg").style.transform = "translateX(" + i + "px)"
                        }
                    },
                    setTransition: function(e) {
                        let t = this;
                        for (let i = 0; i < t.slides.length; i++) t.slides[i].style.transition = e + "ms", t.slides[i].querySelector(".slide-bgimg").style.transition = e + "ms"
                    }
                }
            });
            e(".cygni-horizontal-titles .swiper-slide").each(function() {
                var t = e(this).find(".title").outerWidth();
                e(this).css("width", t)
            });
            h = new Swiper(".cygni-horizontal-titles", {
                mousewheel: {
                    invert: !1
                },
                slidesPerView: 1,
                speed: 800,
                navigation: {
                    nextEl: ".horizontal-next",
                    prevEl: ".horizontal-prev"
                },
                centeredSlides: !0,
                slideClass: "horizontal-item",
                wrapperClass: "horizontal-wrapper",
                containerClass: "cygni-horizontal-titles",
                pagination: {
                    el: ".horizontal-progress",
                    type: "progressbar",
                    renderProgressbar: function(e) {
                        return '<span class="hor-current">1</span><span class="' + e + '"></span><span class="hor-total"></span>'
                    }
                }
            }), n = e(".horizontal-item").length;
            e(".hor-total").text(n), e(".hor-total").prepend("0");
            a = e(".horizontal-item.swiper-slide-active").find(".project-url").attr("href");
            e(".horizontal-project-link a").attr("href", a), h.on("slideChangeTransitionEnd", function() {
                var t = e(".horizontal-item.swiper-slide-active").find(".project-url").attr("href");
                e(".horizontal-project-link a").attr("href", t)
            }), e(".hor-current").prepend("0"), h.on("slideChangeTransitionEnd", function() {
                var t = e(".swiper-slide-active").data("index");
                e(".hor-current").text(t), e(".hor-current").prepend("0")
            }), h.controller.control = m, m.controller.control = h, t.finished.then(function() {
                setTimeout(function() {
                    e(".cygni-horizontal-titles .title span").each(function(t, i) {
                        e(i).delay(1 * t).queue(function(t) {
                            e(this).addClass("anim-in"), t()
                        })
                    }), e(".cygni-horizontal-images").addClass("init")
                }, 350), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in"), e(".toggle-line").addClass("toggle-line-in"), e(".hor-ov").addClass("anim-in")
                }, 1250), setTimeout(function() {
                    e(".cygni-horizontal-titles").addClass("hor-init"), e(".horizontal-progress, .horizontal-project-link, .horizontal-pagination").addClass("anim-in")
                }, 1650)
            })
        }(e(".wall-wrapper").length > 0 && (e(".title, .category").each(function() {
            e(this).wrapInner("<span></span>")
        }), e(".wall-project a").on("mouseenter", function() {
            e(".wall-project").addClass("pw-op"), e(this).parent(".wall-project").removeClass("pw-op")
        }), e(".wall-project a").on("mouseleave", function() {
            e(".wall-project").removeClass("pw-op")
        }), t.finished.then(function() {
            e(".overlay").addClass("overlay-ch-out"), setTimeout(function() {
                e(".wall-project").each(function(t, i) {
                    e(i).delay(100 * t).queue(function(t) {
                        e(this).addClass("project-in"), t()
                    })
                })
            }, 200), setTimeout(function() {
                e(".site-branding img ").addClass("logo-in")
            }, 1500), setTimeout(function() {
                e(".toggle-line").addClass("toggle-line-in")
            }, 2e3), setTimeout(function() {
                e(".fullscreen-footer a").each(function(t, i) {
                    e(i).delay(75 * t).queue(function(t) {
                        e(this).addClass("span-in"), t()
                    })
                })
            }, 1650)
        })), e(".single-project").length > 0) && (e(".single-project").find(".project-image").prepend('<span class="pi-ov pi-ov-1"></span><span class="pi-ov pi-ov-2"></span><span class="pi-ov pi-ov-3"></span> <span class="pi-ov pi-ov-4"></span>'), null != u && e(".pi-ov").css("background", u), t.finished.then(function() {
            e(".single-project").find(".project-image");
            e(".pi-ov").addClass("pi-ov-in")
        }));
        if (e(".pe-blog-posts").length > 0 && (e(".pe-blog-posts").masonry({
                itemSelector: ".pe-post",
                columnWidth: ".pe-blog-sizer",
                gutter: ".pe-blog-gutter",
                stamp: ".pe-blog-stamp",
                percentPosition: !0
            }), e(window).on("scroll", function() {
                var t = e(window).scrollTop() / 10;
                e(".j-back").css({
                    transform: "translatex(-" + t + "px)"
                })
            }), t.finished.then(function() {
                e(".j-back").addClass("anim-in"), setTimeout(function() {
                    e(".pe-post").each(function(t, i) {
                        e(i).delay(200 * t).queue(function(t) {
                            e(this).addClass("anim-in"), t()
                        })
                    })
                }, 500), setTimeout(function() {
                    e(".site-branding img ").addClass("logo-in")
                }, 800), setTimeout(function() {
                    e(".toggle-line").addClass("toggle-line-in")
                }, 1300)
            })), e(".pe-single-post").length ? e(".site-footer").addClass("blog-footer") : e(".site-footer").removeClass("blog-footer"), e(".pe-embed-video").length > 0) {
            e(".pe-embed-video").append('<span class="pe-video-play"><i class="icon-play"></i></span><span class="pe-video-overlay"></span>');
            const t = new Plyr(".pe-video", {
                controls: ["play-large", "play", "progress", "duration", "mute", "volume", "fullscreen"],
                autoplay: !0,
                muted: !0,
                volume: 0,
                quality: {
                    default: 1080
                },
                loop: {
                    active: !0
                }
            });
            e(".pe-video-play").on("click", function() {
                e(this).fadeOut(500), e(".pe-video-overlay").fadeOut(500), t.restart(), t.increaseVolume(1)
            }), window.cVideo = t
        }
        if (e(".pe-video-style-2").length > 0) {
            const t = new Plyr(".pe-video-2", {
                controls: ["play-large", "play", "progress", "duration", "mute", "volume", "fullscreen"]
            });
            e(".icon-play").on("click", function() {
                e(this).parent(".video-control").addClass("controls-gone"), t.play(), t.increaseVolume(1)
            }), window.cVideo2 = t
        }
        if (e(".image-wrapper").length > 0 && e(".image-wrapper").each(function() {
                var t = e(this).find("img"),
                    i = e(this).data("delay");
                if (e(this).hasClass("has-animation")) {
                    var a = e(this).outerHeight();
                    e(this).css({
                        transitionDelay: "0s",
                        height: a + "px"
                    }), t.css("position", "absolute"), (e(this).hasClass("slide-left") || e(this).hasClass("slide-right")) && t.css("width", "unset"), e(this).wrapInner('<div class="slide-anim-holder"></div>'), null !== i && e(".slide-anim-holder").css({
                        transitionDelay: i + "s"
                    }), e(this).find(".slide-anim-holder").addClass("sa-ready")
                }
                if (e(this).hasClass("image-lightbox")) {
                    var s = t.attr("src");
                    t.attr("data-mfp-src", s), e(".image-lightbox").magnificPopup({
                        delegate: "img",
                        type: "image",
                        closeOnContentClick: !0,
                        closeBtnInside: !1,
                        mainClass: "image-lightbox",
                        image: {
                            verticalFit: !0
                        },
                        zoom: {
                            enabled: !0,
                            duration: 300
                        }
                    })
                }
            }), e(".pe-carousel").length > 0) new Swiper(".pe-carousel", {
            slidesPerView: "auto",
            speed: 750,
            spaceBetween: 250,
            watchSlidesProgress: !0,
            parallax: !0
        });
        e(".c-accordion").length > 0 && e(".accordion-title").each(function(t) {
            var i = e(this);
            if (i.attr("data-scroll", !0), e(".accordion-content").hide(), t < 10) var a = "0" + (t + 1);
            if (t > 9) a = t + 1;
            i.attr("data-index", a), i.on("click", function() {
                var t = i.find(".accordion-content");
                t.hasClass("ac-active") ? (t.slideUp(500), t.removeClass("ac-active")) : (e(".accordion-content").slideUp(500), e(".accordion-content").removeClass("ac-active"), t.slideDown(500), t.addClass("ac-active"))
            })
        }), e(".page-nav").length > 0 && e(".page-nav").each(function() {
            var t = e(this).find(".lp-title"),
                i = t.text();
            t.attr("data-hover", i)
        }), e(".team-member").length > 0 && e(".team-member").each(function() {
            var t = e(this).find(".team-member-name"),
                i = e(this).find(".team-member-pos");
            t.wrapInner("<span></span>"), i.wrapInner("<span></span>")
        }), e(".c-form").length > 0 && e(".c-form").each(function() {
            var t = e(this).find("input, textarea"),
                i = e(this).find(".field-wrap, .message-wrap");
            t.on("focus", function() {
                e(this).parent("div").addClass("field-active")
            }), t.on("focusout", function() {
                i.removeClass("field-active")
            })
        }), e(".process-tabs").length && (e(".tab-1").on("click mouseover", function(t) {
            t.preventDefault(), e(".tab-1").addClass("active"), e(".tab-1-content").show("300"), e(".tab-2").removeClass("active"), e(".tab-3").removeClass("active"), e(".tab-4").removeClass("active"), e(".tab-5").removeClass("active"), e(".tab-2-content").hide("300"), e(".tab-3-content").hide("300"), e(".tab-4-content").hide("300"), e(".tab-5-content").hide("300")
        }), e(".tab-2").on("click mouseover", function(t) {
            t.preventDefault(), e(".tab-2").addClass("active"), e(".tab-2-content").show("300"), e(".tab-1").removeClass("active"), e(".tab-3").removeClass("active"), e(".tab-4").removeClass("active"), e(".tab-5").removeClass("active"), e(".tab-1-content").hide("300"), e(".tab-3-content").hide("300"), e(".tab-4-content").hide("300"), e(".tab-5-content").hide("300")
        }), e(".tab-3").on("click mouseover", function(t) {
            t.preventDefault(), e(".tab-3").addClass("active"), e(".tab-3-content").show("300"), e(".tab-1").removeClass("active"), e(".tab-2").removeClass("active"), e(".tab-4").removeClass("active"), e(".tab-5").removeClass("active"), e(".tab-1-content").hide("300"), e(".tab-2-content").hide("300"), e(".tab-4-content").hide("300"), e(".tab-5-content").hide("300")
        }), e(".tab-4").on("click mouseover", function(t) {
            t.preventDefault(), e(".tab-4").addClass("active"), e(".tab-4-content").show("300"), e(".tab-1").removeClass("active"), e(".tab-2").removeClass("active"), e(".tab-3").removeClass("active"), e(".tab-5").removeClass("active"), e(".tab-1-content").hide("300"), e(".tab-2-content").hide("300"), e(".tab-3-content").hide("300"), e(".tab-5-content").hide("300")
        }), e(".tab-5").on("click mouseover", function(t) {
            t.preventDefault(), e(".tab-5").addClass("active"), e(".tab-5-content").show("300"), e(".tab-1").removeClass("active"), e(".tab-2").removeClass("active"), e(".tab-3").removeClass("active"), e(".tab-4").removeClass("active"), e(".tab-1-content").hide("300"), e(".tab-2-content").hide("300"), e(".tab-3-content").hide("300"), e(".tab-4-content").hide("300")
        })), e(".project-url").length && (e(".project-url").on("mouserover", function() {
            e(this).find("wrap").addClass("hover")
        }), e(".project-url").on("mouseleave", function() {
            e(this).find("wrap").removeClass("hover")
        })), e(".accordion-title").length && e(".accordion-title").each(function() {
            e(this).on("click", function(t) {
                e(".accordion-title").removeClass("active"), t.preventDefault(), e(this).toggleClass("active")
            })
        }), e(".section").each(function() {
            var t = e(this),
                i = t.data("background");
            if (null != i) {
                t.addClass("has-bg"), t.prepend('<div class="section-bg-ovs"><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span></div>');
                t.find(".section-bg-ovs");
                t.find(".sec-bg-ov").css("backgroundColor", i)
            }
        })
    })
}(jQuery);

