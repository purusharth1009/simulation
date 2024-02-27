function Vehicle(brand,model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType;
}
Vehicle.prototype.accelerate=function(){
    this.speed+=10;
    console.log('${this.brand} ${this.model} is accelerating.Current speed: ${this.speed}mph.');
};
Vehicle.prototype.brake=function(){
    this.speed-=10;
    console.log('${this.brand} ${this.model} is braking. Current speed:${this.speed} mph.');

};
Vehicle.prototype.refuel=function(){
    console.log('${this.brand} ${this.model} is refueling.');
};
function Car(brand,model,speed,fuelType,numberOfWheels ){
Vehicle.call(this,brand,model,speed,fuelType)
this.numberOfWheels=numberOfWheels;
}
Car.prototype=object.create(Vehicle.prototype):
Car.prototype.constructor=Car;
Car.prototype.honk=function(){
    console.log("honk! honk!");
};
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  const myCar = new Car("Toyota", "Camry", 0, "Gasoline", 4);
const myAirplane = new Airplane("Boeing", "747", 0, "Jet fuel", 4, true);

// Invoking methods for both types of vehicles
myCar.accelerate();
myCar.honk();
myCar.brake();
myCar.refuel();

myAirplane.accelerate();
myAirplane.takeOff();
myAirplane.brake();
myAirplane.refuel();  