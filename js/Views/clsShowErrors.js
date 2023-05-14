export class clsShowErrors {

    setError(error) {

        const root = document.getElementById("root");

        const div = document.createElement("div");

        div.innerHTML = `<h1>Error: ${error}</h1>`;

        document.body.appendChild(div);
    }
}

