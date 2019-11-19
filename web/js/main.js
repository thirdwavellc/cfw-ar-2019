var englewoodHeight = $("#englewood-story").outerHeight();
var reproductiveHeight = $("#reproductive-story").outerHeight();
var williesHeight = $("#willies-story").outerHeight();
var southsideHeight = $("#southside-story").outerHeight();
var womenHeight = $("#women-story").outerHeight();
var syrianHeight = $("#syrian-story").outerHeight();
var withusHeight = $("#with-us-section").height() - 200;
var grantsHeight = $("#grants").height();
var financialsHeight = $("#financials").height();
var donorsHeight = $("#donors").height();
var vendorsHeight = $("#vendors").height();
var leadershipHeight = $("#leadership").height();

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.5"}});

var withusScene = new ScrollMagic.Scene({
        triggerElement: "#englewood-story",
        duration: withusHeight
    })
    .setClassToggle("#with-us-title", "active")
    .addIndicators()
    .addTo(controller);

var englewoodScene = new ScrollMagic.Scene({
        triggerElement: "#englewood-story",
        duration: englewoodHeight
    })
    .setClassToggle(".englewood-anim", "active")
    .addIndicators()
    .addTo(controller);

var reproductiveScene = new ScrollMagic.Scene({
        triggerElement: "#reproductive-story",
        duration: reproductiveHeight
    })
    .setClassToggle(".reproductive-anim", "active")
    .addIndicators()
    .addTo(controller);


var williesScene = new ScrollMagic.Scene({
        triggerElement: "#willies-story",
        duration: williesHeight
    })
    .setClassToggle(".willies-anim", "active")
    .addIndicators()
    .addTo(controller);

var southsideScene = new ScrollMagic.Scene({
        triggerElement: "#southside-story",
        duration: southsideHeight
    })
    .setClassToggle(".southside-anim", "active")
    .addIndicators()
    .addTo(controller);

var womenScene = new ScrollMagic.Scene({
        triggerElement: "#women-story",
        duration: womenHeight
    })
    .setClassToggle(".women-anim", "active")
    .addIndicators()
    .addTo(controller);

var syrianScene = new ScrollMagic.Scene({
        triggerElement: "#syrian-story",
        duration: syrianHeight
    })
    .setClassToggle(".syrian-anim", "active")
    .addIndicators()
    .addTo(controller);

var backgroundScene1 = new ScrollMagic.Scene({
        triggerElement: "#grants",
        duration: grantsHeight
    })
    .setClassToggle("#grants-title, #grants-box", "active")
    .addIndicators()
    .addTo(controller);

var backgroundScene1 = new ScrollMagic.Scene({
        triggerElement: "#financials",
        duration: financialsHeight
    })
    .setClassToggle(".background-anim", "lime-bg")
    .addIndicators()
    .addTo(controller);

var backgroundScene1 = new ScrollMagic.Scene({
        triggerElement: "#financials",
        duration: financialsHeight
    })
    .setClassToggle("#financials-title, #financials-box", "active")
    .addIndicators()
    .addTo(controller);

var backgroundScene2 = new ScrollMagic.Scene({
        triggerElement: "#donors",
        duration: donorsHeight
    })
    .setClassToggle(".background-anim", "green-bg")
    .addIndicators()
    .addTo(controller);

var backgroundScene2 = new ScrollMagic.Scene({
        triggerElement: "#donors",
        duration: donorsHeight
    })
    .setClassToggle("#donors-title, #donors-box", "active")
    .addIndicators()
    .addTo(controller);

var backgroundScene3 = new ScrollMagic.Scene({
        triggerElement: "#vendors",
        duration: vendorsHeight
    })
    .setClassToggle(".background-anim", "purple-bg")
    .addIndicators()
    .addTo(controller);

var backgroundScene3 = new ScrollMagic.Scene({
        triggerElement: "#vendors",
        duration: vendorsHeight
    })
    .setClassToggle("#vendors-title, #vendors-box", "active")
    .addIndicators()
    .addTo(controller);

var backgroundScene4 = new ScrollMagic.Scene({
        triggerElement: "#leadership",
    })
    .setClassToggle(".background-anim", "plum-bg")
    .addIndicators()
    .addTo(controller);

var backgroundScene4 = new ScrollMagic.Scene({
        triggerElement: "#leadership",
    })
    .setClassToggle("#leadership-title, #leadership-box", "active")
    .addIndicators()
    .addTo(controller);


$(".button").on("click", function() {
  var modal = $(this).data("modal");
    $(modal).stop().fadeTo('500',1);
    
    if ($(modal).fadeTo('500',1))
        $("body").addClass("modalbod");
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").stop().fadeOut(300);
    $("body").removeClass("modalbod");
  }
 
});

if ($(window).width() > 1000) {
    $('#felicia-photo').addClass('rellax-hero');
    $('.sub-hero-photo1').addClass('rellax-hero');
    $('.sub-hero-photo2').addClass('rellax-hero');
    $('.circle-0').addClass('rellax-hero');
}
var rellax = new Rellax('.rellax-hero');

var options = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    prefix : '',
    suffix : ''
};

// inViewport jQuery plugin
// http://stackoverflow.com/a/26831113/383904
$(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i,el){
      function visPx(){
        var H = $(this).height(),
            r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
        return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
      } visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));

jQuery(function($) { // DOM ready and $ in scope
  $('.fig-number').inViewport(function (px) {
    if(px>0 && !this.initNumAnim) { 
      this.initNumAnim = true;
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) { $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
  };      
});
});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}

//refresh page on browser resize
var width = $(window).width();
$(window).resize(function() {
    if (width > 600 && $(window).width() < 600) {
        location.reload();
    }
    else if (width < 600 && $(window).width() > 600) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 800 && $(window).width() < 800) {
        location.reload();
    }
    else if (width < 800 && $(window).width() > 800) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 1000 && $(window).width() < 1000) {
        location.reload();
    }
    else if (width < 1000 && $(window).width() > 1000) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 1200 && $(window).width() < 1200) {
        location.reload();
    }
    else if (width < 1200 && $(window).width() > 1200) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 1400 && $(window).width() < 1400) {
        location.reload();
    }
    else if (width < 1400 && $(window).width() > 1400) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 1600 && $(window).width() < 1600) {
        location.reload();
    }
    else if (width < 1600 && $(window).width() > 1600) {
        location.reload();
    }
});

var width = $(window).width();
$(window).resize(function() {
    if (width > 1800 && $(window).width() < 1800) {
        location.reload();
    }
    else if (width < 1800 && $(window).width() > 1800) {
        location.reload();
    }
});