$(document).ready(function(){
  var count = 1;
  var price = $(".buy-holder-price").text();

  var totalPrice = price * count;

  function plus() {
    count += 1;
    $(".amount").text(count);
    console.log(count);
  }

  function minus() {
    count -= 1;
    if (count <= 0) {
      count = 1;
    }

    $(".amount").text(count);
    console.log(count);
  }

  function calcTotalPrice() {
    totalPrice = price * count;
    $(".buy-holder-total-price-result").text(totalPrice);
  }
  // function cost() {
  //  var price = 200;
  //  var total = price *
  // }

  $(".plus").on('click', function(e) {
    plus();
    calcTotalPrice();
  });

  $(".minus").on('click', function(e) {
    minus();
    calcTotalPrice();
  });




});
