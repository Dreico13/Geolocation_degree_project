import  {clsSetLocation}  from "./Models/clsSetLocation.js";

window.onload = () => {
    new Main();
}

class Main {
    
    constructor() {

        this.obj_location = new clsSetLocation();
        console.log("Hello");
    }

}