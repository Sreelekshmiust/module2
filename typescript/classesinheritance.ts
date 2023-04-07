class Vehicle{
    name:string;

    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}
class Car extends Vehicle{
    model: string;
    constructor(model:string,name:string){
        super(name);
        this.model=model;
    }
    getNameModel():string{
        return this.model + this.name;
    }
}
class Truck extends Vehicle{
    constructor(name:string){
        super(name);
    }
}
var mycar = new Car("Sport Model...","BMW ")
console.log(mycar.getNameModel());

var truck = new Truck("Tata truck");
console.log(truck.getName());