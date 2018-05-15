(function() {

var dspl = document.querySelector("#dspl");
var btns = document.querySelector("#button");
var time = 10;

    function clock(success) {
      if (time >= 0) {
        dspl.textContent = time--;
        setTimeout(function(){
          clock(success);
        }, 1000);
      } else {
        success();
      }
    }

  btns.addEventListener("click", function() {

    this.classList.add("hidden");
    dspl.classList.remove("hidden");

    clock( function() {
      dspl.classList.toggle("watch");
      dspl.classList.add("success");
      dspl.textContent = "KONIEC CZASU";
    });

  }, false);

})();
