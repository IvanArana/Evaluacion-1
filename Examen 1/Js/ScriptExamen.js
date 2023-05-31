// Obtener referencia al formulario y al elemento de lista
const formulario = document.getElementById("formulario");
const listaTareas = document.getElementById("listaTareas");

// Objeto ListaTareas
const ListaTareas = {
  tareas: [],

  agregarTarea: function (tarea) {
    this.tareas.push(tarea);
  },

  mostrarLista: function () {
    // Limpiar la lista de tareas existente
    listaTareas.innerHTML = "";

    // Recorrer el arreglo de tareas y crear elementos de lista
    this.tareas.forEach(function (tarea) {
      const elementoLista = document.createElement("li");
      elementoLista.textContent = tarea;
      listaTareas.appendChild(elementoLista);
    });
  },
};

// Vincular el evento "submit" del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe vacio

  const tareaIngresada = document.getElementById("tareaInput").value;
  ListaTareas.agregarTarea(tareaIngresada);
  ListaTareas.mostrarLista();

  formulario.reset(); // Limpiar el formulario al hacer click
})