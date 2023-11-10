import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'joke-form-component',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent {

  @Output() jokeCreated = new EventEmitter<any>();

  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = new FormGroup({
      pregunta: new FormControl('', [Validators.required, Validators.minLength(6)]),
      respuesta: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  crearBroma(pregunta:string, respuesta:string) {

    if (this.formulario.valid) {
      const pregunta = this.formulario.get('pregunta')?.value;
      const respuesta = this.formulario.get('respuesta')?.value;
      this.jokeCreated.emit({ setup: pregunta, punchline: respuesta });
      this.formulario.reset();
    }
    
  }

}
