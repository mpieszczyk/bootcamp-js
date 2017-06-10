(function($, window, document, undefined){

      $.fn.toc = function() {
        var toc = $("<div class='toc'></div>"),
            name = $("<h2>Spis treści</h2>"),
            list = $("<ul></ul>");

            this.each(function(x) {
                var head = $(this).find("h2"),
                    href = $("<li><a href='#" + (x + 1) + "'>" + (x + 1) + ". " + head.text() + " </a></li>");
                $(this).attr("id", (x + 1));

                list.append(href);
            });

             toc.append(name).append(list);
             toc.insertBefore(this[0]);
      };

})(jQuery, window, document);
