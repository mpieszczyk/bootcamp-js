(function($) {
  $("#open").click(function(e) {
      e.preventDefault();
      $("#toggle .nav-menu").toggle("slide");
      $(this).toggleClass("rotate");
  });
})(jQuery);
