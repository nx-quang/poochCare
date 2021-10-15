$(".carousel1").owlCarousel({
    margin: 10,
    loop: true,
    auotoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 2,
            nav: false,
        },
       
    }
});

$(document).ready(() => {
        $(".popup-with-zoom-anim").magnificPopup({
            type: "inline",
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: "auto",
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        });
    });

    document.getElementById("switchButton").onclick = function () {
        document.getElementById("myBody").classList.toggle("dark");
};