function setHero() { 
    var w = $(window).height();
    //console.log(w);
    $(".c-hero-image").css("height", w + "px");
    $(".c-hero-cover").css("height", w + "px");
}

$(document).ready(function () {
    
    new WOW().init();
    
    setHero();

    //give sliding effect to the arrow on hero image to go to a designated anchor
    $("#downArrow").on('click', function (event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    $(".scroll").click(function (event) {
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({
            scrollTop: target_top
        }, 'slow');
    });



});


$(window).resize(function () {
    setHero();
});
