(function () {

  var btn = document.querySelector(".btn");
  var box = document.querySelector(".box");

      btn.addEventListener("click", function() {
btn.value = "SHOW BOX";
        box.classList.toggle("hidden");

        if (!box.classList.contains("hidden")) {
            btn.value = "HIDE BOX";
        } else {
            btn.value = "SHOW BOX";
        }

      });

})();
