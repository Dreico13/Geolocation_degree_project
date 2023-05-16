export class clsNavCoord {
    
///////////////////////////////////////////////////
    constructor() {
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
            this.setErrors("Geolocation is not supported by this browser.");
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
        var coordinates = [];
        coordinates[0] = position.coords.longitude;
        coordinates[1] = position.coords.latitude;

        return coordinates;
    }

//////////////////////////////////////////////////
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

        return stringError;
       
    }
////////////////////////////////////////////////////
    sendCoordinates() {
        return this._setPosition();
    }

///////////////////////////////////////////////////
    sendError() {
        
    }

}