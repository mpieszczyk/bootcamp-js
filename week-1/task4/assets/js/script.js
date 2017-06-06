// 4. Funkcja sumująca przekazane liczby
// Stwórz funkcję o nazwie sum , która będzie przyjmowała jeden parametr, którym będzie
// tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a
// następnie zwrócić wynik takiej operacji.
// Przykładowe jej użycie powinno wyglądać tak:
// sum([1, 10, 5, 4]); // zwraca wartość 20

(function(){

  function sum(arr) {

  var sum = 0;

  for ( i = 0; i < arr.length; i++ ) {

  sum += arr[i];

  }

  console.log(sum);

}

})();
