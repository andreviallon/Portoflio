$(document).ready(() => {
    $(".menu-mobile").click(() => {
        $(".mobile-nav-toggle-cross").css({ display: "block" });
        $(".menu-mobile").css({ display: "none" });
        $(".menu-mobile-content-container").css({ display: "flex" });
    });

    $(".mobile-menu-nav .closing-cross-container").click(() => {
        $(".mobile-nav-toggle-cross").css({ display: "none" });
        $(".menu-mobile").css({ display: "block" });
        $(".menu-mobile-content-container").css({ display: "none" });
    });

    $(".mobile-nav-li a").click(() => {
        $(".mobile-nav-toggle-cross").css({ display: "none" });
        $(".menu-mobile").css({ display: "block" });
        $(".menu-mobile-content-container").css({ display: "none" });
    });
});
