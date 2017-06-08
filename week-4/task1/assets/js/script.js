(function() {

    if (typeof String.prototype.repeat !== "function") return;

      String.prototype.repeatt = function(number) {

          var output = "";

          for (var i=0; i<number; i++) {

            output += this;

          }

          return output;
          
      };

})();
