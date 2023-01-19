let tareas = []
function openDialog() {
    document.getElementById("modal").classList.toggle("hidden");
}
function pintarTareas() {
    let allTareas = "";
    tareas.forEach((tarea) => {
        allTareas += `<button onclick="setComplete(${tarea.id})"
            class="w-full cursor-pointer group bg-emerald-400 mt-2 py-2 px-4 rounded flex hover:bg-emerald-500"
        >
            <svg
                class="flex-none"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g
                    id=":lupa:-Product-Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g
                        id="ic_fluent_checkbox_checked_24_regular"
                        class="${tarea.isComplete ? "fill-orange-500" : "fill-gray-500"} group-hover:fill-white"
                        fill-rule="nonzero"
                    >
                        <path
                            d="M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z"
                            id=":arte:Color"
                        ></path>
                    </g>
                </g>
            </svg>
            <p class="ml-2 pt-1">${tarea.title}</p>
        </button>
        > <button class="mt-2 py-2 px-4 bg-red-400"   onclick="deleteTarea(${tarea.id})">Eliminar</button>`;
    });
    document.getElementById("all-tasks").innerHTML = allTareas;
    document.getElementById("total").innerHTML = tareas.length + "tareas";
}
pintarTareas();
function addTarea() {
    let tituloTarea = document.getElementById("newtarea").value;
    if (tituloTarea == "" || tituloTarea.trim().length == 0) {
        return;
    }
    let nuevaTareas = {
        id: tareas.length,
        title: tituloTarea,
        isComplete: false,
    };
    tareas.push(nuevaTareas);
    pintarTareas();
    openDialog();
    document.getElementById("newtarea").value = "";
}
function setComplete(id) {
    console.log("Has pulsado sobre id: " + id);
    tareas.forEach((tarea) => {
        if (tarea.id == id) {
            tarea.isComplete = !tarea.isComplete;
        }
    });
    pintarTareas();
}
function deleteTarea(id) {
    console.log("Has pulsado sobre id: " + id);

    // tareas=tareas.filter((tarea) => tarea.id != id)
    let index = tareas.findIndex(tarea => tarea.id == id)

    tareas.splice(index, 1);
    pintarTareas();
}