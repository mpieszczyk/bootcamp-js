(function() {

  function getPage() {
    var reg = /\?page=(\d+)/i,
        href = window.location.search,
        pgNum = reg.exec(href);

        return pgNum && pgNum[1] ? parseInt(pgNum[1]) : null;

  }

window.addEventListener("load", function(){
  var result = document.querySelector("#result"),
      num = getPage();

      result.innerHTML = "Sparsowany numer strony to:" + " " + num;
}, false);

})();
