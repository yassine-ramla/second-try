        var navLinks = document.getElementById("navLinks");
        var about = document.getElementById("about");
        var events = document.getElementById("events");
        var contact = document.getElementById("contact");
        var liAbout = document.getElementById("liAbout");
        var liEvents = document.getElementById("liEvents");
        var liContact = document.getElementById("liContact");
        var imgWidth = document.getElementById("imgWidth");
        function hideMenu(){
            navLinks.style.width = "0vw";
            about.style.fontSize = "0%";
            events.style.fontSize = "0%"
            contact.style.fontSize = "0%";
            liAbout.style.display = "none";
            liEvents.style.display = "none";
            liContact.style.display = "none";
            imgWidth.style.width = "0px";
            imgWidth.style.height = "0px";

        }
        function showMenu(){
            navLinks.style.width = "50vw";
            about.style.fontSize = "100%";
            events.style.fontSize = "100%"
            contact.style.fontSize = "100%";
            liAbout.style.display = "block";
            liEvents.style.display = "block";
            liContact.style.display = "block";
            imgWidth.style.width = "15px";
            imgWidth.style.height = "15px";
        }

        var swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            centerSlide: true,
            fade: true,
            grabCursor: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            }
          });