function fecz(url, fnSuccess, fnErr) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        fnSuccess(this.response);
      }
    }

    xhr.onerror = function() {
      fnErr(this.status);
    }

    xhr.send(null);
  }



var url = "http://code.eduweb.pl/bootcamp/users/";
  fecz(url, function(data) {
  	console.log("Sukces");
  	console.log(data);
  }, function(err) {
  	console.log("Wystąpił błąd!");
  	console.log(err);
  });
