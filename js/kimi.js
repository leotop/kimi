// basic toggle navigation menu

$('#buttonOpenSearchbar').on('click', function(){
    $('#helpText, #buttonOpenSearchbar').hide();
    $('#searchbar, #buttonCloseSearchbar').show();
});

$('#buttonCloseSearchbar').on('click', function(){
    $('#helpText, #buttonOpenSearchbar').show();
    $('#searchbar, #buttonCloseSearchbar').hide();

});

$('#buttonOpenSearchbarMobile').on('click', function () {
    $('.fly-searchbar').show();
});

$('#buttonCloseSearchbarMobile').on('click', function(){
    $('.fly-searchbar').hide();
});


// firing owl carousel

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


