import { Alumno, asignatura, Notas } from './data'

export function buscarAlumnoPromise(id: number): Promise<Alumno | undefined> {
    return new Promise((resolve, reject) => {
        const resultado = alumnos.find(alumno => alumno.id === id);
        resultado ? resolve(resultado) : reject("Alumno no encontrado");
    });
}

export function buscarAsignaturaPromise(id: number): Promise<Asignatura | undefined> {
    return new Promise((resolve, reject) => {
        const resultado = asignaturas.find(asignatura => asignatura.id === id);
        resultado ? resolve(resultado) : reject("Asignatura no encontrada");
    });
}

export function buscarNotaPromise(id: number): Promise<Nota | undefined> {
    return new Promise((resolve, reject) => {
        const resultado = notas.find(Nota => Nota.id === id);
        resultado ? resolve(resultado) : reject("Nota no encontrada");
    });
}
