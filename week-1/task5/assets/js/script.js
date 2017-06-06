// 5. Funkcja zwracająca sformatowaną datę
// Utwórz funkcję o nazwie getDate , która po wywołaniu zwróci aktualną, sformatowaną datę.
// Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.
// Przykładowe użycie tej funkcji powinno wyglądać następująco:
// getDate(); // zwraca np. “17.04.2017”

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
