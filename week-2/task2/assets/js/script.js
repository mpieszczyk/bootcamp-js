var form = document.querySelector("#form"),
      fields = form.querySelectorAll("[data-error]");

      function isNotEmpty(field){
        return field.value !== "";
      }

      function isEmail(field){
        return field.value.indexOf("@") !== -1;
      }

      function isNumber(field){
        return isNaN(field.value) !== true && field.value !== "";
      }

      function isAtLeast(field, min){
        return field.value.length >= min;
      }

      function displayErrors(err) {

        var ul = document.querySelector("ul.error");

        if(!ul) {
          ul = document.createElement("ul");

          ul.classList.add("error");
        }

        ul.innerHTML = "";

        err.forEach(function(error){

          var li = document.createElement("li");

          li.textContent = error;

          ul.appendChild(li);

        });

        form.parentNode.insertBefore(ul, form);

      }

      form.addEventListener("submit", function(e){
        e.preventDefault();

      var err = [];

      for (var i = 0; i < fields.length; i++) {

        var field = fields[i],
            isValid = false;

        if (field.type === "text") {

          isValid = isNotEmpty(field);

        } else if (field.type === "email") {

          isValid = isEmail(field);

        } else if (field.type === "number") {

           isValid = isNumber(field);

        } else if (field.type === "textarea") {

          isValid = isAtLeast(field, 1);

        }

        if (!isValid) {
          field.classList.add("error");
          err.push(field.dataset.error);
        } else {
          field.classList.remove("error");
        }

      }

      if(err.length) {
        displayErrors(err);
      } else {
        form.submit();
      }

    }, false);
