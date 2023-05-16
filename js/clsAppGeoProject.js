import { clsNavCoord } from "./Models/clsNavCoord.js";
import { clsView } from "./View/clsView.js";

window.onload = () => {
    new clsAppGeoProject();
}

class clsAppGeoProject {

//////////////////////////////////////////////
    constructor() {

        this.obj_clsView = new clsView();
        this.obj_clsGetLocation = new clsNavCoord();
        
        this.#init();
      
    }

//////////////////////////////////////////////
    #init() {
        this.#events();
        // this.#sendCoordinatesToView();
    }
/////////////////////////////////////////////

    #sendCoordinatesToView() {
        

    }

    #events() {
        var startLocalization = document.getElementById("startButton");
        var stopLocalization = document.getElementById("stopButton");

        startLocalization.addEventListener('click', () => {
            this.obj_clsGetLocation.initNavigation();
            // this.#sendCoordinatesToView();
        })

        stopLocalization.addEventListener('click',() => {
            this.obj_clsGetLocation.stopNavigation();
        })

    }

    #onStart(){
        console.log("Start");
    } 


}