import  {clsGetLocation}  from "./Models/clsGetLocation.js";

window.onload = () => {
    new Main();
}

class Main {
    
    constructor() {

        this.obj_location = new clsGetLocation();
    }

}