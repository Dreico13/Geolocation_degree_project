
export class clsView {

/////////////////////////////////
    constructor() {

        this.#init();
     
    }

    #init() {

        const div = document.createElement("div");

        div.innerHTML = `<button class="btn btn-primary m-2" type="button" id="startButton">
                            Start Localization
                        </button>
                        <button class="btn btn-danger m-2" type="button" id="stopButton">
                            Stop Localization  
                        </button>`;
        
        document.body.appendChild(div);

    }

/////////////////////////////////
    showCoordinates() {

        const div = document.createElement("div");

        div.innerHTML = `<h1>Longitude: ${longitude} - Latitude: ${latitude} </h1>`;

        document.body.appendChild(div);
    }

/////////////////////////////////
    showErrors() {
        
        const div = document.createElement("div");

        div.innerHTML = `<h1>Error: ${error}</h1>`;

        document.body.appendChild(div);

    }
}