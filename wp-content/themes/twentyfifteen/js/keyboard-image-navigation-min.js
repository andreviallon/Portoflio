!function($){$(document).on("keydown.twentyfifteen",function(n){var t=!1;37===n.which?t=$(".nav-previous a").attr("href"):39===n.which&&(t=$(".nav-next a").attr("href")),t&&!$("textarea, input").is(":focus")&&(window.location=t)})}(jQuery);