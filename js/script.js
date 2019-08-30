function Pizza(size, crust, cheese, meat) { // make a pizza
  this.size = size,
    this.crust = crust,
    this.cheese = cheese,
    this.meat = meat,
    this.price;
}

Pizza.prototype.getprice = function() { // calculate the cost of a specific pizza
  this.price = 5; //base cost
  if (this.size === 'S') { //size cost
    this.price = this.price * 0.75;
  } else if (this.size === 'L') {
    this.price = this.price * 1.25;
  }


}
}

document.ready(function() {
  $('somethingsomethingform').submit(function(event) {
    event.preventDefault();
  })
})