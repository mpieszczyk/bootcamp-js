function getPrice(basket, price) {

    if( basket >= 5 && basket <= 20) {

      discount = price*0.05;

    } else if( basket >= 21 && basket <= 50) {

      discount = price*0.1;

    } else if( basket >= 51 && basket <= 100) {

      discount = price*0.15;

    } else if ( basket > 100 ) {

      discount = price*0.2;

    } else {

      discount = 0;
      console.log("Dla tej ilości zakupów nie ma rabatu");
      return false;

    }

    promoPrice = price - discount;

    console.log("Podstawowa cena produktu to" + " " + price + " " + ", po obniżce to" + " " + promoPrice + ".");

}
