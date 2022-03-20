// ==================================================
// Project Name  :  Appril
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  24 January 2019
// Author        :  Bitspeck
// Developer:    :  Rakibul Islam Dewan
// ==================================================




(function($) {
  "use strict";




  
  // left-sidebar - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('#sidebar-dismiss, .overlay').on('click', function () {
      $('#left-sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#left-sidebar-collapse').on('click', function () {
      $('#left-sidebar').addClass('active');

      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
    });
  });
  // left-sidebar - end
  // --------------------------------------------------




  
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------




  
  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - end
  // --------------------------------------------------





  // Counter - start
  // --------------------------------------------------
  $('.count-text').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    },
    {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  // Counter - end
  // --------------------------------------------------




  
  // popup video - start
  // --------------------------------------------------
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });
  // popup video - end
  // --------------------------------------------------




  
  // testimonial-carousel - start
  // --------------------------------------------------
  $('#testimonial-carousel').owlCarousel({
    items:1,
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    smartSpeed:800
  });
  // testimonial-carousel - end
  // --------------------------------------------------




  
  // screenshot-carousel - start
  // --------------------------------------------------
  $('#screenshot-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:15,
    merge:true,
    dots:false,
    center: true,
    // autoplay:true,
    smartSpeed:800,
    autoplayTimeout:3000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1200:{
        items:5
      },
      1920:{
        items:5
      }
    }
  });
  // screenshot-carousel - end
  // --------------------------------------------------

  // form - start
  // --------------------------------------------------

  $('#contact_form .contact-btn').click(function () {
    $.ajax({
        type: 'post',
        url: 'mail.php',
        data: $('#contact_form').serialize(),
        success: function () {
            $('#contact_form')[0].reset();
            $('#contact_form .contact-btn').attr('style', "background-color:#16C39A");
            $('#contact_form .contact-btn').siblings().html("<i style='color:#16C39A'>*</i> Email has been sent successfully");
        }
    });
    return false;
  });

  // --------------------------------------------------
  // form - start




  
  // sticky menu - start
  // --------------------------------------------------
  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 250) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
  // sticky menu - end
  // --------------------------------------------------



  
})(jQuery);