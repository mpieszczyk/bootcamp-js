(function($) {

    $(document).ready(function () {

        $('<ul id="name-list">').insertAfter($("#get-name"));

        $('#add').on("click", function(e) {
            e.preventDefault();
            var name = $('#name').val();

                if (!($.trim(name))) {
                  alert("Pole nie może być puste!");
                } else {
                  $("#name-list").append("<li>" + name + "</li>");
                  $('#name').val("");
                }

            });
        });

})(jQuery);
