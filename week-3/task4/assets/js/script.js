function getJSON(url, fnSuccess, fnErr) {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      fnSuccess(JSON.parse(this.response));
    }
  }

  xhr.onerror = function() {
    fnErr(this.status);
  }

  xhr.send(null);

}

var url = "http://code.eduweb.pl/bootcamp/users/";

getJSON(url, function(data) {
  console.log("Sukces");
  console.log(data);
  // typeof data powinno zwrócić “object”
}, function(err) {
  console.log("Wystąpił błąd!");
  console.log(err);
});
