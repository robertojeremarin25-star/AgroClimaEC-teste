export function cargarHistorial(listaElement) {
    const historial = JSON.parse(localStorage.getItem("historialAnalisis")) || [];

    if (historial.length === 0) {
        listaElement.innerHTML = "<li>Sin análisis guardados</li>";
        return;
    }

    historial.forEach(h => {
        const li = document.createElement("li");
        li.className = h.estado;
        li.innerHTML = `
            <strong>${h.fecha}</strong><br>
            ${h.canton} | ${h.etapa}<br>
            Estado: <b>${h.estado.toUpperCase()}</b>
        `;
        listaElement.appendChild(li);
    });
}
function cargarHistorial() {
    const lista = document.getElementById("historial");
    if (!lista) return;

    const historial = JSON.parse(localStorage.getItem("historialAnalisis")) || [];

    lista.innerHTML = "";

    if (historial.length === 0) {
        lista.innerHTML = "<li>Sin análisis guardados</li>";
        return;
    }

    historial.slice().reverse().forEach(item => {
        const li = document.createElement("li");
        li.className = item.estado;
        li.innerHTML = `
            <strong>${item.fecha}</strong><br>
            ${item.canton} – ${item.etapa}<br>
            Estado: ${item.estado.toUpperCase()}
        `;
        lista.appendChild(li);
    });
}
