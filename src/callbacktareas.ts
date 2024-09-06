import { Alumno, asignatura, Notas } from './data'

export function buscarAlumno(id: number, callback: (error: string | null, resultado?: Alumno) => void) {
    const resultado = alumnos.find(alumno => alumno.id === id);
    if (resultado) {
        callback(null, resultado);
    } else {
        callback("Alumno no encontrado");
    }
}

export function buscarAsignatura(id: number, callback: (error: string | null, resultado?: Asignatura) => void) {
    const resultado = asignaturas.find(asignatura => asignatura.id === id);
    if (resultado) {
        callback(null, resultado);
    } else {
        callback("Asignatura no encontrada");
    }
}

export function buscarNota(id: number, callback: (error: string | null, resultado?: Nota) => void) {
    const resultado = notas.find(Nota => Nota.id === id);
    if (resultado) {
        callback(null, resultado);
    } else {
        callback("Nota no encontrada");
    }
}

