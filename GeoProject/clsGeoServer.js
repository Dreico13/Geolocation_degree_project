
export class clsGeoServer {


    constructor() {

    }
//////////////////////////////////////////
    sendCoordinatesToDb(pCoordinates) {
        var stringJson = JSON.stringify(pCoordinates);
        console.log(stringJson);

        this.ajaxPetition(stringJson);

    }

//////////////////////////////////////////
    ajaxPetition(pCoordinates) {
        var jsonhttp = new XMLHttpRequest();
        var url = "http://localhost:40080/M03_GeolocationProject/GeoProject/php/ws.php?q=" + encodeURIComponent(pCoordinates);

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