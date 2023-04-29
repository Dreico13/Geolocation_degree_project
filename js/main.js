import  {clsLocation}  from "./Models/clsLocation.js";

window.onload = () => {
    new Main();
}

class Main {
    
    constructor() {

        this.obj_location = new clsLocation();
        console.log("Hello");
    }

}