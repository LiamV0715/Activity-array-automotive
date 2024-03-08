//this includes the vehicle class as a module
const VehicleModule = require(`./vehicleBaseClass`).Vehicle



//this shows how to call from this module...


//After you write the derived Car class, you should test it out.

// Liam speaking! This was the line that kept breaking my code, and I'm now realizing
// I should have commented it out instead of deleting, woops!

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, maxPassengers, fuel) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPassengers;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = fuel;
        this.scheduleService = false;
        this.mileage = mileage;
        this.passengersFit = false
    }


checkService() {
    if (this.mileage > 30000) {            
        this.scheduleService = true
        console.log('She needs service stat!') 
        return true;                      
    } else {
        this.scheduleService = false
        console.log('No service needed, phew')
        return false
    }
}

start() {
    if (this.fuel > 0) {            
        console.log("the engine roars to life");
        return this.started = true
    } else {
        console.log("no fuel womp womp");
        return this.started = false;
    }
}

loadPassenger(num) {
    // this grabs the passenger variable to decide if it is less than or equal to maxpassenger
    // returns true if all passengers fit and false if not
    this.passenger = num
    if (this.passenger < this.maxPassengers) {
        if ((this.passenger) <= this.maxPassengers) {
            console.log('everyone fit!')
            this.passengersFit = true;          
        } else {
            console.log(this.model + " " + this.make + " doesn't have enough space!");
            this.passengersFit = false
        }
    } else {
        console.log(this.model + " " + this.make + " is full");
        this.passengersFit = false
    }
}

loveTheCar() {
    if (this.fuel > 0 && this.passengersFit && !this.checkService()) {            
        console.log("I love this car!!");
    } else {
        console.log("not a fan of this car...");
    }
}
}
// why aren't the cars that check all these boxes true here?^

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

let Sedan = new Car('mercury', 'Sedan', '2002', 'white', 2000, 4, 15) 
let Maximo = new Car('Nissan', 'Maxima', '2020', 'Orange', 10000, 2, 15)
let TruckIHate = new Car('Escalade', 'Unlikeable Truck', '2004ish', 'White', 5000000, 3, 0)


Sedan.start()
Sedan.checkService()
Sedan.loadPassenger(5)
Sedan.loveTheCar()
console.log(Sedan)

Maximo.start()
Maximo.checkService()
Maximo.loadPassenger(1)
Maximo.loveTheCar()
console.log(Maximo)

TruckIHate.start()
TruckIHate.checkService()
TruckIHate.loadPassenger(4)
TruckIHate.loveTheCar()
console.log(TruckIHate)



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here
