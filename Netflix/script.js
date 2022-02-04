$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 200) {
        $('#menu').css('background-color','black');
    } else {
        $('#menu').css('background-color','');
    }
});