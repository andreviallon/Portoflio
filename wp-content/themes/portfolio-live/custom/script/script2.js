$(document).ready(function () {
  //Menu
  //when menu is closed on click open it
  $(".menu-mobile").click(function () {
    $(".mobile-nav-toggle-cross").css({ display: "block" });
    $(".menu-mobile").css({ display: "none" });
    $(".menu-mobile-content-container").css({ display: "flex" });
  });
  //when menu is open on click close it
  $(".mobile-menu-nav .closing-cross-container").click(function () {
    $(".mobile-nav-toggle-cross").css({ display: "none" });
    $(".menu-mobile").css({ display: "block" });
    $(".menu-mobile-content-container").css({ display: "none" });
  });
  //when menu is open adn click on menu item close menu
  $(".mobile-nav-li a").click(function () {
    $(".mobile-nav-toggle-cross").css({ display: "none" });
    $(".menu-mobile").css({ display: "block" });
    $(".menu-mobile-content-container").css({ display: "none" });
  });

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
