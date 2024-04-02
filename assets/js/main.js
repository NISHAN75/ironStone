(function ($) {
    $(document).ready(function () {


        $(".nav-link").click(function(){
            $(".sub-menu").slideToggle();

          });

          var service_slider = new Swiper(".service-slider-wrapper", {
            slidesPerView: 3,
            spaceBetween: 35,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
              },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                310: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                },
              },
   
              
          });

          // magnific Popup active
          $(".popup-btn").magnificPopup({
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1",
                    },
                },
            },
        });
        





    });
 })(jQuery);
 