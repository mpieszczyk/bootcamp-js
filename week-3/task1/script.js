(function () {

    if ( typeof String.prototype.rpt !== "function" ) return;

      String.prototype.rpt = function(nmbr){

          var output = "";

          for (var i = 0; i < nmbr; i ++) {

              output += this;

              }

          return output;

      };

})();
