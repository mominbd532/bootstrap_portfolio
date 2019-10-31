$(document).ready(function () {

    //super slide
    $('#slides').superslides({
        play: 5000,
        animation: 'fade',
        pagination: false
        }
    );

   //type js

    var typed = new Typed('.typed',{
        strings: ['Web Developer','Flutter Developer','Android Developer'],
        typeSpeed: 40,
        loop: true,
        showCursor: false,
    });
    //Navigation
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    //owl carosol
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    //Easy pie chart
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent))
        }
    });
    //Counting
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
//Way point
    var waypoint = new Waypoint({
        element: document.getElementById('thing'),
        handler: function(direction) {
            alert('You have scrolled to a thing')
        }
    });

});