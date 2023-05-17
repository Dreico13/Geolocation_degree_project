
export class clsView {

/////////////////////////////////
    constructor() {

        this._root = document.getElementById("root");
     
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

/////////////////////////////////
    showCoordinates(pCoordinates) {

        // console.log(pCoordinates);

        // const div = document.createElement("div");

        // div.innerHTML = `<h1>Longitude: ${pCoordinates.Longitude} - Latitude: ${pCoordinates.Latitude} </h1>`;

        // this._root.appendChild(div);
    }

/////////////////////////////////
    showErrors(pError) {
        
        const div = document.createElement("div");

        div.innerHTML = `<h1>Error: ${pError}</h1>`;

        this._root.appendChild(div);

    }
//////////////////////////////////
    showExecutionTimer() {

    }
    
}