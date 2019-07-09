$(document).ready(function(){
  var count = 1;
  var price = $(".buy-holder-price").text();

  var totalPrice = price * count;

  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);

  setCurrentPage();

  function setCurrentPage() {
    $(".menu-list li").each(function (i, el) {
      var menuItemLink = $(el).find('a').attr('href');
      if (filename === menuItemLink) {
        $(el).addClass("active");
      }
    });
  }

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

  function menuClick() {
    $(".menu-main").addClass("menu-opened");
    $(".overlay").addClass("menu-opened");
  }

  function closeMenuClick() {
    $(".menu-main").removeClass("menu-opened");
    $(".overlay").removeClass("menu-opened");
  }

  function getWindowLocation() {
    console.log(window.location.href);
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

  $(".menu-exc").on('click', function(e) {
    menuClick();
  });

  $(".menu-cross").on('click', function(e) {
    closeMenuClick();
  });

  $(".overlay").on('click', function(e) {
    closeMenuClick();
  });

});
