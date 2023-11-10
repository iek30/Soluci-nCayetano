import { Joke } from "./joke";

export class Servicio {
    //DATOS ENCAPSULADOS
    private jokes: Joke[];


    constructor(){
  
      this.jokes = [
        new Joke('¿Cuál es la bebida alcohólica preferida de un programador?','El JLabel.'),
        new Joke('¿Sabes que existen 10 tipos de personas?','Los que saben binario y los que no.'),
        new Joke('¿Por qué el software se parece a la iglesia?','Porque primero lo construimos y luego rezamos.')
      ];
    }
  
    //API
    obtenerBromas(){
      //Aquí quiero que se me pase una copia del Array
      //TO-DO: Es mejor retornar un array de objeto literales. Protego el original y evito que el controlador tenga que conocer las clase Joke.
      return [...this.jokes];
    }

    agregarNuevaBroma(datos:any){
      this.jokes.unshift(new Joke(datos.setup,datos.punchline));
    }

    eliminarUnaBroma(id: number){
      
      for (let index = 0; index < this.jokes.length; index++) {
        if (id === this.jokes[index].id) {
          this.jokes.splice(index,1)
        }
      }

    }

}
