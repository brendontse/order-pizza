function Pizza(size, crust, cheese, meat) { // make a pizza
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meat = meat;
  this.price;
}

Pizza.prototype.getPrice = function() { // calculate the cost of a specific pizza
  this.price = 7; // base cost

  if (this.size === 'Small') { // size cost
    this.price *= 0.75;
  } else if (this.size === 'Large') {
    this.price *= 1.25;
  }

  if (this.crust === 'extra thick' || this.crust === 'gluten-free') { // crust cost
    this.price *= 1.5;
  } else if (this.crust === 'thin' || this.crust === 'flatbread') {
    this.price *= 1.2;
  }

  if (this.cheese === 'cheddar') { // cheese cost
    this.price += 1;
  } else if (this.cheese === 'gouda') {
    this.price += 2;
  }

  if (this.meat === 'all-meat') { // meat cost
    this.price += 4;
  } else if (this.meat === 'bacon' || this.meat === 'chicken' || this.meat === 'sausage') {
    this.price += 2;
  } else if (this.meat === 'pepperoni') {
    this.price += 1;
  }

  total = total + this.price;
}

Pizza.prototype.getPizzaInfo = function() { //returns a specific pizza 's information
  return this.size + ', ' + this.crust + ' ' + this.cheese + ' cheese pizza with ' + this.meat + ' on top. $' + this.price;
}

var showPizzaInfo = function() {
  $('.pizza-info').show();
  $('.pizza-info').text(newPizza.getPizzaInfo());
}

var total = 0

$(document).ready(function() {
  $('#pizza-order').submit(function(event) {
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var crust = $('input[name=crust]:checked').val();
    var cheese = $('input[name=cheese]:checked').val();
    var meat = $('input[name=meat]:checked').val();

    var newPizza = new Pizza(size, crust, cheese, meat);

    newPizza.getPrice();
    console.log(total);
    $('#pizzas').append('<li><span class="custom-pizza">' + newPizza.getPizzaInfo() + '</span></li>');


    document.getElementById("pizza-order").reset();

  });
});


/////find out how to get total ??