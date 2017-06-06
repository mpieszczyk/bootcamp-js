// 2. Pętle
// Stwórz skrypt, który będzie wyświetlał filmy z podanego tutaj obiektu https://pastebin.com/
// kCbqehMm (oczywiście skopiuj ten kod i wstaw go do swojego skryptu zanim rozpoczniesz
// pracę).
// Skrypt powinien wyświetlać filmy z 3 kategorii (użyj do tego celu console.log() ) w
// następujący sposób:
// Dla dzieci:
// Kubuś Puchatek i Przyjaciele
// Zwariowane Melodie
// Piotruś Pan
// =======================Dla młodzieży:
// Szkoła uczuć
// Podróż za jeden uśmiech
// Szatan z 7-ej klasy
// =======================
// Dla dorosłych:
// Gwiezdne Wojny
// Szklana Pułapka
// Titanic
// =======================
// Podpowiedź: skorzystaj najpierw z pętli for...in , aby iterować po obiekcie pod zmienną
// movies , a w tej pętli umieść pętlę for , którą będziesz iterował po tablicy z tytułami filmów.

var movies = {
    "Dla dzieci": [
        "Kubuś Puchatek i Przyjaciele",
        "Zwariowane Melodie",
        "Piotruś Pan"
    ],
    "Dla młodzieży": [
        "Szkoła uczuć",
        "Podróż za jeden uśmiech",
        "Szatan z 7-ej klasy"
    ],
    "Dla dorosłych": [
        "Gwiezdne Wojny",
        "Szklana Pułapka",
        "Titanic"
    ]
};

for (var cat in movies) {

  console.log(cat + ":");

  arr = movies[cat];

    for (var i=0; i < arr.length; i++) {

      console.log(arr[i]);

    }

    console.log("=======================");

  }
