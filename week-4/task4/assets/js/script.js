(function($) {

    $(document).ready(function() {

        var output = $("#output"),
            template = Handlebars.compile($("#tpl").html());

        $("#get-data").on("click", function(e) {
            e.preventDefault();

            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {
                var info = template( {person: data} );
                    output.append(info);
            });

        });

    });

})(jQuery);
