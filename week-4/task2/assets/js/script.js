(function($) {
  $("#open").click(function(e) {
      e.preventDefault();
      $(".nav-menu").toggle("slide");
      $(this).toggleClass("rotate");
  });
})(jQuery);
