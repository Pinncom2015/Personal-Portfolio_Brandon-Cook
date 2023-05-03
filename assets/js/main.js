//
$(".nav-toggler").click(function(){
    $(".nav-items").toggleClass("show");
});

// Hero Slider
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

// Porfolio Slider
$('.portfolio-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
})


// Reviews Slider
$('.reviews-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:2
        }
    }
})

// Smooth Scroll for nav-bar
document.addEventListener("DOMContentLoaded", function(){
    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

    smoothScrollLinks.forEach((link) => {
        link.addEventListener("click", function (event){
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function step(timestamp) {
                if(!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }

            window.requestAnimationFrame(step);
        });
    });

    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return (c /2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
});