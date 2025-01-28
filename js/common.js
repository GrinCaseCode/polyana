$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".sidebar").slideUp(200);
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".sidebar").slideUp(200);
		$(".menu-overlay").fadeOut(200);
	});

	$(".menu__haschild > a").click(function(e) {
		e.preventDefault();
		$(this).parent().siblings().removeClass("active");
		$(this).parent().siblings().find(".menu__dropdown").slideUp(200);
		if ($(this).siblings(".menu__dropdown").is(":hidden")) {
			$(this).siblings(".menu__dropdown").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings(".menu__dropdown").slideUp(200);
			$(this).parent().removeClass("active");
		}
		});

		$(".btn-catalog-open").click(function() {
			if ($(".sidebar").is(":hidden")) {
				$(".sidebar").slideDown(200);
				$("body").addClass("no-scroll");
			} else {
				$(".sidebar").slideUp(200);
				$("body").removeClass("no-scroll");
			}
		});

		$(".sidebar__back").click(function() {
			$(".sidebar").slideUp(200);
		});
	

	//search
	$(".open-search").click(function() {
		if ($(".header-search").hasClass("active")) {
			$(".header-search").removeClass("active");
		} else {
			$(".header-search").addClass("active");
		}
	});

	  $(document).mouseup(function (e) {
		var container = $(".header-search");
		if (container.has(e.target).length === 0){
		$(".header-search").removeClass("active");
		}
	});

	$(".btn-like").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	$(".location-contact__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".location-contact").removeClass("active");
		$(this).parent().siblings(".location-contact").find(".location-contact__content").slideUp(200);
	  });
	
	{
		if ($(window).width() < 992) { 
			$(".item-accordion__head").click(function() {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().siblings().find(".item-accordion__content").slideUp(200);
				$(this).siblings(".item-accordion__content").slideToggle(200);
				$(this).parent().toggleClass("active");
			});

			$(".user-header .btn-header").click(function(e) {
				e.preventDefault();
				if ($(".user-header__dropdown").is(":hidden")) {
					$(".user-header__dropdown").fadeIn(200);
				} else {
					$(".user-header__dropdown").fadeOut(200);
				}
			});	
			$(document).mouseup(function (e) {
				var container = $(".user-header");
				if (container.has(e.target).length === 0){
					$(".user-header__dropdown").fadeOut(200);
				}
			  });
					
		}
	}
	{
		if ($(window).width() > 992) { 
			$(".item-accordion__head").mouseover(function() {
				$(this).parents(".item-accordion").siblings().removeClass("active");
				$(this).parent().addClass("active");
			});
		}
	}

	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

		/*range slider*/

		$('.input-range').each(function() {
			var $range = $(this).find(".range-controls__slider"),
			 	$from_input = $(this).find(".input-range__from"),
		 		$to_input = $(this).find(".input-range__to"),
			from = $range.attr("from"),
			to = $range.attr("to"),
			min = $range.attr("min"),
			max = $range.attr("max")
			$range.ionRangeSlider({
				type: "double",
				min: min,
				max: max,
				from: from,
				to: to,
				prettify_enabled: true,
				onChange: function(data) {
					updateValues()
				}
			});
			$range = $range.data("ionRangeSlider");
			var updateValues = function() {
				var res = $range.result;
				$from_input.val(res.from, true);
				$to_input.val(res.to,true)
			};
			$from_input.on("focus", function() {
				this.value = this.value;
				this.focus();
				this.selectionStart = this.value.length
			}).on("input", function() {
				$range.update({
					from: this.value
				})
			}).on("blur", updateValues);
			$to_input.on("focus", function() {
				this.value = this.value;
				this.focus();
				this.selectionStart = this.value.length
			}).on("input", function() {
				$range.update({
					to: this.value
				})
			}).on("blur", updateValues)
		});

	$(".input-phone").mask("+7 (999) 999-99-99");

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	  });


	  //open modal confirm

	  $('#modal-login .btn-main').click(function(event) {
		event.preventDefault();
		const form = $(this).closest('form');
		
		// Проверить валидность формы
		if (form[0].checkValidity()) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-confirm',
				type: 'inline',
				touch: false,
				autoFocus: false,
				backFocus: false,
			});
		} else {
			form[0].reportValidity();
		}
	  });

	//basket
	

	function checkBasket() {
		if ($(".catalog-wrapper").hasClass("active")) {
			setTimeout(() => {
				{
					if ($(window).width() > 1500) { 
						$(".catalog-wrapper .slider-catalog").slick('slickSetOption', 'slidesToShow', 5, true);
					}
				  }
				  {
					if ($(window).width() < 1500) { 
						$(".catalog-wrapper .slider-catalog").slick('slickSetOption', 'slidesToShow', 4, true);
					}
				  }
	
				  $(".catalog-wrapper .slider-catalog").slick('setPosition');
			}, 300);
		}		
	}

	$(".btn-main_add").click(function(e) {
		e.preventDefault();
		$(this).html("<i class='far fa-check'></i> Ещё ...");
		const $catalogWrapper = $(this).parents(".catalog-wrapper");

		// Добавляем класс активности
		$catalogWrapper.addClass("active");

		checkBasket();
});

checkBasket();

$(".basket-sidebar__close").click(function(e) {
	e.preventDefault();
	const $catalogWrapper = $(this).parents(".catalog-wrapper");



	// Получаем текущий слайдер
	const $slider = $catalogWrapper.find(".slider-catalog");

	// Перезапускаем слайдер с новым количеством видимых слайдов
	
	setTimeout(() => {
		{
			if ($(window).width() > 1500) { 
				$slider.slick('slickSetOption', 'slidesToShow', 6, true);
			}
		  }
		  {
			if ($(window).width() < 1500) { 
				$slider.slick('slickSetOption', 'slidesToShow', 6, true);
			}
		  }

		$slider.slick('setPosition');
	}, 300);

	// Добавляем класс активности
	$catalogWrapper.removeClass("active");
});


//select catalog	
$(".item-select__value").click(function() {
	$(".item-select__dropdown").slideUp(200);
	$(".item-select__value").removeClass("active");
	if ($(this).siblings(".item-select__dropdown").is(":hidden")) {
		$(this).siblings(".item-select__dropdown").slideDown(200);
		$(this).addClass("active");
	} else {
		$(this).siblings(".item-select__dropdown").slideUp(200);
		$(this).removeClass("active");
	}
});

$(document).mouseup(function (e) {
    var container = $(".item-select");
    if (container.has(e.target).length === 0){
		$(".item-select__dropdown").slideUp(200);
		$(".item-select__value").removeClass("active");
    }
  });


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

