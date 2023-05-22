
export class clsGeoServer {
    
    constructor() {
        this.navigation = true;
    }
//////////////////////////////////////////
    sendCoordinatesToDb(pCoordinates) {
        var stringJson = JSON.stringify(pCoordinates);
        console.log(stringJson);

        this.ajaxPetition(stringJson);

    }

///////////////////////////////////////////
    stopNavigation() {
        let stopJson = {"state": true};
        this.navigation = false;
        var stringJson = JSON.stringify(stopJson);
        console.log(stringJson);

        this.ajaxPetitionToStop(stringJson);
        
    }

//////////////////////////////////////////
    ajaxPetition(pCoordinates) {
        if (this.navigation) {
            var jsonhttp = new XMLHttpRequest();
            var url = "/M03_GeolocationProject/GeoProject/frontend/../backend/ws.php?coordinates=" + encodeURIComponent(pCoordinates);

            jsonhttp.onreadystatechange = function() {
                if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
                    var response = jsonhttp.responseText;
                    console.log(response);
                }
            };

            jsonhttp.open("GET", url, true);
            jsonhttp.send();
        }
        
    }

///////////////////////////////////////////
    ajaxPetitionToStop(pStopNavigation) {
        var jsonhttp = new XMLHttpRequest();
        var url = "/M03_GeolocationProject/GeoProject/frontend/../backend/ws.php?stopNavigation=" + encodeURIComponent(pStopNavigation);

        jsonhttp.onreadystatechange = function() {
            if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
                var response = jsonhttp.responseText;
                console.log(response);
            }
        };

        jsonhttp.open("GET", url, true);
        jsonhttp.send();
    }
}