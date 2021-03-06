var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:2000,
    dot: true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})