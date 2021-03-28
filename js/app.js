$(".card-1").on("mouseenter", function() {
    $(".card-1").stop(true, false).animate({
        height: "210px",
        width: "610px"
    })
});

$(".card-1").on("mouseleave", function() {
    $(".card-1").stop(true, false).animate({
        height: "200px",
        width: "600px"
    })
});

$(".card-logo").on("mouseenter", function() {
    $(".card-logo").stop(true, true).animate({
        height: "95.5px"
    }, 400, function() {
        $(".about").delay(300).fadeToggle();
    })
});

$(".card-logo").on("mouseleave", function() {
    $(".about").stop(true, true).delay(700).fadeToggle(function() {
        $(".card-logo").delay(1000).animate({
            height: "52px"
        });
    });

});