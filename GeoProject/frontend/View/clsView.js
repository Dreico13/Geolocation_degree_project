
export class clsView {

/////////////////////////////////
    constructor() {

        this._root = document.getElementById("root");
        this._errors = false;
        this._intervalId;
     
    }
////////////////////////////////
    init() {
        
        const div = document.createElement("div");

        div.innerHTML = `<button class="btn btn-primary m-2" type="button" id="startButton">
                            Start Localization
                        </button>
                        <button class="btn btn-danger m-2" type="button" id="stopButton">
                            Stop Localization  
                        </button>`;
        
        this._root.appendChild(div);

    }
//////////////////////////////////
    static initMap(pCoordinates) {

        var coordinates = JSON.parse(pCoordinates);
        console.log(coordinates);

        
            // Crea el mapa en el contenedor con el ID "map"
            var map = L.map("map").setView([41.271296, 1.9759104], 10);

            // Agrega una capa de mapa base (por ejemplo, OpenStreetMap)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Agrega marcadores para las coordenadas
            coordinates.forEach(function(coordinate) {
                var lat = coordinate.latitude;
                var lng = coordinate.longitude;
                L.marker([lat, lng]).addTo(map);
            });
        
    }

/////////////////////////////////
    removeInitButtons() {
        const startButton = document.getElementById("startButton");
        const stopButton = document.getElementById("stopButton");

        startButton.remove();
        stopButton.remove();
    }


/////////////////////////////////
    showErrors(pError) {

        this._errors = true;
        const stopButton = document.getElementById("stopButton");
        const div = document.createElement("div");

        div.innerHTML = `<h1>Error: ${pError}</h1>`;

        this._root.appendChild(div);

        //Eliminamos el boton de stop, de este modo no se puede extrer info de la base de datos
        stopButton.remove();

    }
//////////////////////////////////
    showExecutionTimer() {
        if (!this._errors) {

            const div = document.createElement("div");

            div.innerHTML = `<h1 class="text-center">Travel time:</h1><br>
                            <h2 class="text-center" id="temporizador">00:00:00</h2>`;

            this._root.appendChild(div);

            var temporizadorElement = document.getElementById('temporizador');
            var tiempo = 0;

            function actualizarTemporizador() {
                tiempo++;

                var horas = Math.floor(tiempo / 3600);
                var minutos = Math.floor((tiempo % 3600) / 60);
                var segundos = tiempo % 60;

                temporizadorElement.textContent = horas.toString().padStart(2, '0') + ':' +
                                                    minutos.toString().padStart(2, '0') + ':' +
                                                    segundos.toString().padStart(2, '0');
            }

            this._intervalId = setInterval(actualizarTemporizador, 1000);

        }
        
    }

// ////////////////////////////////////
    clearInterval() {
        
        clearInterval(this._intervalId);
          
    }

///////////////////////////////////////
    
    
}