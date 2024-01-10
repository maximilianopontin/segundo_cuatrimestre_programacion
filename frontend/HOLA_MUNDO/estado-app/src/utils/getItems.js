//funcion para cargar las tareas y que queden en la memoria
//las parseo para convertirlas nuevamente en objeto como deben ser cargadas
export function getItems() {
    const itemsFromStorage = JSON.parse(window.localStorage.getItem("todo-list"));
    if (itemsFromStorage === null) {
        return []
    } else {
        return itemsFromStorage
    };
}