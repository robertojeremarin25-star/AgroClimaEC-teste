export function guardarAnalisis(data) {
    let historial = JSON.parse(localStorage.getItem("historialAnalisis")) || [];

    historial.unshift(data);

    if (historial.length > 10) {
        historial = historial.slice(0, 10);
    }

    localStorage.setItem("historialAnalisis", JSON.stringify(historial));
}
guardarAnalisis({
    fecha: new Date().toLocaleString(),
    provincia,
    canton,
    tipoSiembra,
    etapa,
    temperatura: clima.temperatura,
    humedad: clima.humedad,
    lluvia: clima.lluvia,
    estado: resultado.estado
});
