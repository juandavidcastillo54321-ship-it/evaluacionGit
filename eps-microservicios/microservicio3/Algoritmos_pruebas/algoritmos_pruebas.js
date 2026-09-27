function verificarDisponibilidad(cuposDisponibles) {
    if (cuposDisponibles > 0) {
        return "Hay disponibilidad para la cita.";
    } else {
        return "No hay disponibilidad para la cita.";
    }
}

let resultado = verificarDisponibilidad(5);

console.log(resultado);