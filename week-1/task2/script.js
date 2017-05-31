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
