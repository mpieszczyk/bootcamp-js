function getDate() {

  var d1 = new Date();
  var day = d1.getDate(),
      month = d1.getMonth() + 1,
      year = d1.getFullYear();

  if ( month < 10 ) {
    month = "0" + month;
  }

  var d2 = day + "." + month + "." + year;

console.log(d2);

}
