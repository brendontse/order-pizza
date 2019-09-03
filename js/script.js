function Pizza(size, crust, cheese, meat) { // make a pizza
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meat = meat;
  this.price;
}

Pizza.prototype.getPrice = function() { // calculate the cost of a specific pizza
  this.price = 5; // base cost
  if (this.size === 'S') { // size cost
    this.price *= 0.75;
  } else if (this.size === 'L') {
    this.price *= 1.25;
  }

  if (this.crust === 'thiCC' || 'gluten-free') { // crust cost
    this.price *= 1.2;
  } else if (this.crust === 'thin' || 'flatbread') {
    this.price *= 1.1;
  }

  if (this.cheese === 'cheddar') { // cheese cost
    this.price += 1;
  } else if (this.cheese === 'gouda') {
    this.price += 2;
  }

  if (this.meat === 'all-meat') { // meat cost
    this.price += 4;
  } else if (this.meat === 'bacon' || 'chicken' || 'sausage') {
    this.price += 2;
  } else if (this.meat === 'pepperoni') {
    this.price += 1;
  }
}

//returns a specific pizza's information
Pizza.prototype.pizzaInfo = function() {
  return this.size + ' ' + this.crust ' ' + this.cheese + ' cheese pizza with ' + this.meat + ' on top. $' + this.price;
}

$(document).ready(function() {
  $('#pizza-order').submit(function(event) {
    event.preventDefault();

  });
});