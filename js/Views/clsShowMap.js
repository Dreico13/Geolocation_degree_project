export class clsShowMap {

    setCoordinates(longitude,latitude) {
        
        const root = document.getElementById("root");

        const div = document.createElement("div");

        div.innerHTML = `<h1>Longitude: ${longitude} - Latitude: ${latitude} </h1>`;

        document.body.appendChild(div);

    }
    
}