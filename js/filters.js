(function() {
  "use strict";

  var $projects = $(".projects");

  $projects.isotope({
    itemSelector: ".item",
    layoutMode: "fitRows"
  });

  $(".portfolio-filter > li").on("click", function(e) {
    e.preventDefault();

    var filter = $(this).attr("data-filter");

    $(".portfolio-filter > li").removeClass("active");
    $(this).addClass("active");

    $projects.isotope({ filter: filter });
  });
})(jQuery);
