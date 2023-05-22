import { clsNavCoord } from "./Models/clsNavCoord.js";
import { clsView } from "./View/clsView.js";
import { clsGeoServer } from "./clsGeoServer.js";

window.onload = () => {
    new clsAppGeoProject();
}

class clsAppGeoProject {

//////////////////////////////////////////////
    constructor() {

        this.obj_clsView = new clsView();
        this.#init();
        this.obj_clsNavCoord = new clsNavCoord();
        this.obj_clsGeoServer = new clsGeoServer();
        
    }

//////////////////////////////////////////////
    #init() {
        this.obj_clsView.init();
        this.#events();

    }

/////////////////////////////////////////////
    #events() {
        var startLocalization = document.getElementById("startButton");
        var stopLocalization = document.getElementById("stopButton");
        var navigationState = true;

        startLocalization.addEventListener('click', () => {
            
            this.#onStart(navigationState);
        })

        stopLocalization.addEventListener('click',() => {
            navigationState = false;
            this.#onStart(navigationState);
        })

    }

/////////////////////////////////////////////
    #onStart(pNavigationState){

        if (pNavigationState) {

            this.obj_clsNavCoord.initNavigation();
            this.obj_clsView.showExecutionTimer();

        } else {
            this.obj_clsNavCoord.stopNavigation();
            this.obj_clsView.clearInterval();
        }
        
    }

}