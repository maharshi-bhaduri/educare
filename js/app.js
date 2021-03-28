$(".card-1").on("mouseenter", function() {
    $(".card-1").animate({
        height: "210px",
        width: "610px"
    })
});

$(".card-1").on("mouseleave", function() {
    $(".card-1").animate({
        height: "200px",
        width: "600px"
    })
});

$(".card-logo").on("mouseenter", function() {
    $(".card-logo").stop(false, true).animate({
        height: "+=42.5px"
    });
    $(".about").stop(false, true).delay(300).fadeToggle();
});

$(".card-logo").on("mouseleave", function() {
    $(".about").stop(false, true).delay(700).fadeToggle();
    $(".card-logo").stop(false, true).delay(1000).animate({
        height: "-=42.5px"
    });
});