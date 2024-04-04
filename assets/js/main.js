(function ($) {
    $(document).ready(function () {
      gsap.registerPlugin(ScrollSmoother);
      let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
      // span change color
      function setTextAnimation(interval) {
        const spans = $('.main-title span');
        let index = 0;
    
        setInterval(() => {
          spans.each((i, span) => {
            if (i === index) {
              $(span).removeClass('inactive').addClass('active');
            } else {
              $(span).removeClass('active').addClass('inactive');
            }
          });
    
          index = (index + 1) % spans.length; // Move to the next span
    
        }, interval);
      }
    
      // Call the function with the desired time interval (e.g., 300 milliseconds)
      setTextAnimation(1000);

        $(".nav-link").click(function(){
            $(this).parent().find(".sub-menu-wrapper").slideToggle();
            $(this).parent().find('.icon-toogle').toggleClass('show hide');
            $(this).toggleClass('active')   

          });
        
        // mouse enter fucntion
        function classToggle (evt, find, toggle) {
          [].forEach.call(document.querySelectorAll('.' + find), function(a){
              a.classList[evt.type === 'mouseover' ? 'add' : 'remove'](toggle);
          });
        }
          
          let els = document.querySelectorAll('.nav-link');
          
          for (let i = 0, len = els.length; i<len; i++){
              els[i].addEventListener('mouseover', function(e){
                  classToggle(e, 'nav-link', 'change-color');
              });
              els[i].addEventListener('mouseout', function(e){
                  classToggle(e, 'nav-link', 'change-color');
              });
          }


         
          

          let service_slider = new Swiper(".service-slider-wrapper", {
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
                250: {
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
        //event function
        $('#OffcanvasMenu').on('show.bs.offcanvas', function () {
          $('body').addClass('show');
        });
      
        $('#OffcanvasMenu').on('hide.bs.offcanvas', function () {
          $('body').removeClass('show');
        });

        // Split text into spans
        let typeSplit = new SplitType(".text-animation", {
          types: "words, chars",
          tagName: "span"
        });

        // Link timelines to scroll position
        function createScrollTrigger(triggerElement, timeline) {
          // Reset tl when scroll out of view past bottom of screen
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
              timeline.progress(0);
              timeline.pause();
            }
          });
          // Play tl when scrolled into view (60% from top of screen)
          ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onEnter: () => timeline.play()
          });
        }





        $(".text-animation").each(function (index) {
          let tl = gsap.timeline({ paused: true });
          tl.from($(this).find(".char"), { yPercent: 100, duration: 0.5, ease: "power1.inOut", stagger: { amount: 0.8 } });
          createScrollTrigger($(this), tl);
        });

        // Avoid flash of unstyled content
        gsap.set(".text-animation", { opacity: 1 });
          
        gsap.registerPlugin(ScrollTrigger);
        
        const mediaWrap = document.querySelectorAll(".page-hero");
        
        mediaWrap.forEach((media, i) => {
          const mediaImgs = media.querySelectorAll(".page-hero-bg");
          mediaImgs.forEach((item) => {
            const heightDiff = item.offsetHeight - item.parentElement.offsetHeight;
            const parallaxComp = 140;
        
            gsap.to(item.parentElement, {
              y: -heightDiff + parallaxComp,
              scale: 1.1,
              scrollTrigger: {
                trigger: media,
                start: `top  top`,
                id: i + 1,
                scrub: 1.5
              }
            });
          });
        });



    });
 })(jQuery);













