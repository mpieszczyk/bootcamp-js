function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function(type, fn) {

    if(!type || !fn) return;

    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);

};

EventEmitter.prototype.emit = function(type, data) {

    var fns = this.events[type];

    if(!fns || !fns.length) return;

    for(var i = 0; i < fns.length; i++) {
        fns[i](data);
    }

};

function Database(url) {
    EventEmitter.call(this);
    this.url = url;
}

Database.prototype = Object.create(EventEmitter.prototype);
Database.prototype.constructor = Database;

Database.prototype.connect = function() {
    // fikcyjne podłączenie do bazy
    this.emit("connect", this.url);
};

Database.prototype.disconnect = function() {
    // fikcyjne zakończenie połączenia z bazą
    this.emit("disconnect", this.url);
};

// DO ZROBIENIA!
// Docelowe użycie klasy Database
var db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});

db.on("disconnect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});

db.connect();

// po 5 sekundach rozłączamy się
setTimeout(function() {
    db.disconnect();
}, 5000);
