(function() {

  function Toggler(selector) {

    if ( !(this instanceof Toggler) ) {
      return new Toggler(selector);
    }

    this.selector = document.querySelector(selector);

  }

Toggler.prototype.getElem = function() {
  return this.selector;
};

Toggler.prototype.show = function (){
  return this.selector.style.display = "block";
};

Toggler.prototype.hide = function (){
  return this.selector.style.display = "none";
};


var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);

})();
