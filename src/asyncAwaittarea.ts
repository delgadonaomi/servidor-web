
export async function buscarAlumnoAsyncAwait(id: number): Promise<Alumno | undefined> {
    try {
        const resultado = alumnos.find(alumno => alumno.id === id);
        if (!resultado) throw new Error("Alumno no encontrado");
        return resultado;
    } catch (error) {
        console.error(error);
    }
}

export async function buscarAsignaturaAsyncAwait(id: number): Promise<Asignatura | undefined> {
    try {
        const resultado = asignaturas.find(asignatura => asignatura.id === id);
        if (!resultado) throw new Error("Asignatura no encontrada");
        return resultado;
    } catch (error) {
        console.error(error);
    }
}

export async function buscarNotaAsyncAwait(id: number): Promise<Nota | undefined> {
    try {
        const resultado = notas.find(nota => nota.id === id);
        if (!resultado) throw new Error("Nota no encontrada");
        return resultado;
    } catch (error) {
        console.error(error);
    }
}
