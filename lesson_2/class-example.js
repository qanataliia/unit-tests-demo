export class Vehicle {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    logVehicleName(){
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
}

const ricardosGolf = new Vehicle("VW", "Golf", "2017");
ricardosGolf.logVehicleName();