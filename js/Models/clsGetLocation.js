import { clsShowErrors } from "../Views/clsShowErrors.js";
import { clsShowMap } from "../Views/clsShowMap.js";

export class clsGetLocation {
    
    constructor() {
        this.#initLocation();
        this.obj_clsShowMap = new clsShowMap();
        this.obj_clsShowErrors = new clsShowErrors();
        this.setPosition = this._setPosition.bind(this);
        this.setErrors = this._setErrors.bind(this);
    }

    #initLocation() {
        var startLocalization = document.getElementById('startButton');
        var stopLocalization = document.getElementById('stopButton');
        var watchId;
       
        startLocalization.addEventListener('click', () => {
                alert("You start the Geolocalization.")
                if (navigator.geolocation) {
                    watchId = navigator.geolocation.watchPosition(this.setPosition,this.setErrors);
                } else {
                    this.obj_clsShowErrors.setError("Geolocation is not supported by this browser."); 
                }

        })

        stopLocalization.addEventListener('click', () => {
            alert("You stop the Geolocalization.")
            navigator.geolocation.clearWatch(watchId);
            
        })
    }

    _setPosition(position) {
        this.obj_clsShowMap.setCoordinates(position.coords.longitude,position.coords.latitude);        
    }

    _setErrors(error) {
        var stringError;
        switch(error.code) {
            case error.PERMISSION_DENIED:
                stringError = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                stringError = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                stringError = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                stringError = "An unknown error occurred.";
              break;
        }

        this.obj_clsShowErrors.setError(stringError);
       
    }

}