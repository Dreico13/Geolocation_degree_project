import { clsView } from "../View/clsView.js";
import { clsGeoServer } from "../clsGeoServer.js";


export class clsNavCoord {
    
///////////////////////////////////////////////////
    constructor() {
        this.obj_clsView = new clsView();
        this.obj_clsGeoServer = new clsGeoServer();
        this.setCoordinates = this._setCoordinates.bind(this);
        this.setErrors = this._setErrors.bind(this);
    }

//////////////////////////////////////////////////
    initNavigation() {
        
        var watchId;
        
        alert("You start the Geolocalization.")
        if (navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(this.setCoordinates,this.setErrors);
        } else {
            this.obj_clsView.showErrors("Geolocation is not supported by this browser.");
        }
        
        return watchId;
     
    }

///////////////////////////////////////////////////
    stopNavigation(pWatchId) {
        alert("You stop the Geolocalization.")
        navigator.geolocation.clearWatch(pWatchId);

    }
    
///////////////////////////////////////////////////
    _setCoordinates(position) {

        let navigationData = {};
        navigationData = {"Longitude":position.coords.longitude, "Latitude":position.coords.latitude};
        //this.obj_clsView.showCoordinates(navigationData);
        this.obj_clsGeoServer.sendCoordinatesToDb(navigationData);
        
    }

//////////////////////////////////////////////////
    _setErrors(error) {
        let stringError;
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
        this.obj_clsView.showErrors(stringError);

    }


}