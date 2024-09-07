

//1. here we make class Car for make and model
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}



//2. here we make class Menu and declair empty array
// than we declair prompt to add cars and push cars into array
// and create function viewCars 
class Menu {
    constructor() {
        this.cars = [];
    }


//Here we add cars using prompt
    addCar() {
        let carMake = prompt("Car Make");
        let carModel = prompt("Car Model");
        this.cars.push(new Car(carMake, carModel));
    }

//this function view cars
    viewCars() {
        let displayCars = '';
        for(let i = 0; i < this.cars.length; i++) {
            displayCars += `${this.cars[i].make} ${this.cars[i].model}`
        }
        alert (displayCars);

        alert (`${displayCars}`);
    }


//this function delete cars
    deleteCar() {
        let carIndex = prompt('Enter car index');
        this.cars.splice(carIndex, 1);
    }

//this function show our main menu where we ask options
    showMainMenu() {
        return prompt(`
            Main Menu: 
            0) Exit menu
            1) Add car1
            2) DeleteCar
            3) View All Cars

        `)
    }


    //we start menu here and make selection of main menu
    start() {
        let selection = this.showMainMenu();

        while(selection !=0) {
            switch(selection) {
                case "1": this.addCar();
                break;

                case "2": this.deleteCar();
                break;

                case "3": this.viewCars();
                break;

                default: selection = 0;
            }


            selection =this.showMainMenu();
        }
    }

}


//here  I declair car1 and past "Honda", "Horizon"
let car1 = new Car("Honda", "Horizon");
console.log(car1);



//here we invoke the start method
let menu = new Menu();



//here we call our functions
menu.addCar();
menu.viewCars();

menu.showMainMenu();
menu.deleteCar();

menu.start();


   
