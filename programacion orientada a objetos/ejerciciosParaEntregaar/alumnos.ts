//modelar un sistema educativo donde los profesores tengan un listado de alumnos. cada alumno debe saber su nota e 
//informar si esta aprobado o no (mas de 7), la escuela debe tener un registro de los alumnos y maestros y debe poder matricular/contratar y expulsar/ despedir a los mismos
class Alumno {
    public nombre: string;
    public nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Método para comprobar si el alumno está aprobado
    estaAprobado() {
        return this.nota > 7;
    }
}

class Profesor {
    public nombre: string;
    

    constructor(nombre: string) {
        this.nombre = nombre;
        
    }

    // Método para asignar una nota a un alumno
    asignarNota(alumno: Alumno, nota: number) {
        console.log (alumno.nombre,":" , nota);
    }
}
class Escuela {
    private alumnos: Alumno[] = [];
    private profesores: Profesor[] = [];

    constructor (alumnos: Alumno[], profesores: Profesor[]){
        this.alumnos = alumnos;
        this.profesores = profesores;
    }
    matricularAlumno(alumno: Alumno) {
        this.alumnos = [...this.alumnos, alumno];
    }

    expulsarAlumno(alumno: Alumno) {
        const index = this.alumnos.indexOf(alumno);
        if (index !== -1) {
            this.alumnos.splice(index, 1);
        }
    }

    contratarProfesor(profesor: Profesor) {
        this.profesores.push(profesor);
    }

    despedirProfesor(profesor: Profesor) {
        const index = this.profesores.indexOf(profesor);
        if (index !== -1) {
            this.profesores.splice(index, 1);
        }
    }

    obtenerListaAlumnos() {
        return this.alumnos;
    }

    obtenerListaProfesores() {
        return this.profesores;
    }
}

// Ejemplo de uso del sistema
const escuela = new Escuela();

const alumno1 = new Alumno("Juan", 8);
const alumno2 = new Alumno("Maria", 6);
const profesor1 = new Profesor("Profesor Smith");

//escuela.matricularAlumno(alumno1);
//escuela.matricularAlumno(alumno2);
//escuela.contratarProfesor(profesor1);

profesor1.asignarNota(alumno2, 9);
/*
console.log("Lista de Alumnos:", escuela.obtenerListaAlumnos());
console.log("Lista de Profesores:", escuela.obtenerListaProfesores());
console.log(alumno1.nombre + " está aprobado:", alumno1.estaAprobado());
console.log(alumno2.nombre + " está aprobado:", alumno2.estaAprobado());
/*class escuela {
    private alumnos: Alumno[]=[];
    private maestros: Maestro[]=[];

contructor (alumnos: Alumno[], maestros:Maestro[]){
this.alumnos = alumnos;
this.maestros = maestros;
}


cargarAlumnos(nombreAlumno: string): string []{

return 
}
matricularAlumnos(alumno:string): void {
console.log (alumno, "matriculado");

}
contratarMaestros(): string {

}
expulsarAlumnos(): string {

}

despedirMaestros(): string {
}

}
const alumnos=new escuela();
alumnos.cargarAlumnos("mateo");
*/