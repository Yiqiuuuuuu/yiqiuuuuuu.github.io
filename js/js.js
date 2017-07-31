function setHero() {
    var w = $(window).height();
    //console.log(w);
    $(".c-hero-image").css("height",w+"px");
    $(".c-hero-cover").css("height",w+"px"); 
}

$(document).ready(function() {
    setHero();
    
    //give sliding effect to the arrow on hero image to go to a designated anchor
    $("#downArrow").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
    
});


$(window).resize(function(){
    setHero();
});