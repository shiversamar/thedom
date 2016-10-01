function createCar() { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: document.getElementById("userCarModel").value,  ///input for argument
    year: document.getElementById("userCarYear").value, //input for argument
    color: document.getElementById("userCarColor").value, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= 7}, //when called this decreases speed by 7
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 50) {           ///Loops speed increment until it reaches 50
        this.accelerate();
      };
    },
    emergencyBrake: function() {
      while(speed <= 50 && speed > 1) {           /////Loops (decreased)speed until speed reaches 1
        this.brake();
      };

      if (speed = 1 ){
        speed--             //////once speed is 1 this decreases speed by 1
      };
    }
  }
};

function newCar() {
  var x = createCar(); //create new var to called it and 
  return document.getElementById("carInfo").innerHTML = x.getNewCar()
}
