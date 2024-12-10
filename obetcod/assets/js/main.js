!(function($) {
    "use strict";

    // Hero typed
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });

    $(document).click(function(e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Porfolio isotope and filter
    let filterMenu = document.querySelectorAll('.filter-menu li');
    let filterContents = document.querySelectorAll('.filter-content');

    for (let i = 0; i < filterMenu.length; i++) {
        filterMenu[i].addEventListener('click', () => {
            for (let j = 0; j < filterMenu.length; j++) {
                filterMenu[j].classList.remove('active-menu');
            }

            filterMenu[i].classList.add('active-menu');
            let attrValue = filterMenu[i].getAttribute('data-list');

            for (let k = 0; k < filterContents.length; k++) {
                // delete all active contents 
                filterContents[k].classList.add('deleteContents');
                filterContents[k].classList.remove('activeContents');

                // filter contents
                if (filterContents[k].getAttribute('data-item') === attrValue || attrValue === 'Rec') {
                    // display filter contents or display all contents (if attr is 'all')
                    filterContents[k].classList.add('activeContents');
                    filterContents[k].classList.remove('deleteContents');
                }
            }
        });
    }

    // selecting lightbox elements
    let lightBox = document.querySelector('.lightbox');
    let closeBtn = document.querySelector('#close-lightbox');
    let imgCategory = document.querySelector('#image-category');
    let lightBoxImage = document.querySelector('.image-wrapper img');
    let lightBoxShadow = document.querySelector('.lightbox-shadow');
    let controlScrolling = document.querySelector('body');

    for (let i = 0; i < filterContents.length; i++) {
        filterContents[i].addEventListener('click', () => {
            let getCategory = filterContents[i].getAttribute('data-item');
            let getImg = filterContents[i].querySelector('img').src;

            imgCategory.textContent = getCategory;
            lightBoxImage.src = getImg;

            lightBox.classList.add('show-lightbox');
            lightBoxShadow.classList.add('show-shadow');
            controlScrolling.style.overflow = 'hidden';

            closeBtn.onclick = () => {
                lightBox.classList.remove('show-lightbox');
                lightBoxShadow.classList.remove('show-shadow');
                controlScrolling.style.overflow = 'auto';
            }
        });
    }
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);

// C O U N T D O W N HORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//

// Set the date we're counting down to
var countDownDate = new Date("sep 20, 2023 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
        "<p class='d'>" + days + "<br><span>Días</span></p>" +
        "<p class='h'>" + hours + "<br><span>hrs</span></p>" +
        "<p class='m'>" + minutes + "<br><span>min</span></p>" +
        "<p class='s'>" + seconds + "<br><span>s</span></p>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        var a = document.getElementsByClassName("info");
        a[0].style.height = "100vh";
        //Utilice el innerHTML para introducir elementos
        a[0].innerHTML = "<div class='suscribete'>" +
            "<h2>Bienvenido al Grupo: </h2>" + "<br>" +
            "</div>" + "<a class='linkweb' href='https://wa.link/xuub0e' target='_blank'>Ingrese Aqui o QR</a>" +
            "<div class='imagens'>" + "<img src='assets/img/linkwp.png' autoplay muted loop></img></div>" + "<br>" + "<div class='letras'><p>Buenas con todos, si estas aqui es por que tienes la fe de ZHEKITA, al unirse a este Grupo solo pido respeto y comentarios positivos de buena FE, Aqui todos interactuamos mutuamente todo aporte sera analisado conjuntamente por que son jugadas Gratis, exitos a todos y nunca pierdan la fe que tienes en algo que quieren realizar.</p></div>";

        //El elemento con el id demo se oculta
        document.getElementById("demo").style.display = "none";
        //El elemento con el id demo se oculta

        //Un pequeño script para borrar el elemento h3 de cabecera :)
        const nodeList = document.querySelectorAll("imgs");

        nodeList[0].style.display = "none";

        const nodeLists = document.querySelectorAll("h1z");

        nodeLists[0].style.display = "none";


    }
}, 1000);