(function() {

    function debounce(fn, time) {

        var xms = xms;
        var timer;

        return function() {

            clearTimeout(timer);

            function func() {
              return fn();
            }

            timer = setTimeout(func, xms);

        };
    }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);

})();
