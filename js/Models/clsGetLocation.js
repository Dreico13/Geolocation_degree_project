export class clsGetLocation {

    constructor() {
        this.#initLocation();
        this._position = [];
        this._errors = [];
        this.setPosition = this._setPosition.bind(this);
        this.setErrors = this._setErrors.bind(this);
    }

    #initLocation() {
        var startLocalization = document.getElementById('startButton');
        var stopLocalization = document.getElementById('stopButton');
        var watchId;
       
        startLocalization.addEventListener('click', () => {
            
                if (navigator.geolocation) {
                    watchId = navigator.geolocation.watchPosition(this.setPosition,this.setErrors);
                } else {
                    this._errors[0] = "Geolocation is not supported by this browser.";
                }
                console.log(this._errors);
                console.log(this._position);
        })

        stopLocalization.addEventListener('click', () => {
            
            navigator.geolocation.clearWatch(watchId);
            
        })
    }

    _setPosition(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }

    _setErrors(error) {
        var stringError;
        switch(error.code) {
            case error.PERMISSION_DENIED:
                // console.log("User denied the request for Geolocation.");
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
       this._errors[0] = stringError;

    }

    getPosition() {
        return this._position;
    }

    getErrors() {
        return this.errors;
    }
}