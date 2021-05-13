import { EncuestaService } from './../../services/encuesta.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {


  public preguntas:any;

  encuestaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl('', [
      Validators.required
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99)
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(10)
    ]),
  });
 
 
 
   constructor(private servicioEncuesta:EncuestaService) { 
     
   }
 
   ngOnInit(): void {
   }
 
   public AgregarRespuesta()
   {
     
     this.preguntas.nombre = this.encuestaForm.get('nombre')?.value;
     this.preguntas.apellido = this.encuestaForm.get('apellido')?.value;
     this.preguntas.edad = this.encuestaForm.get('edad')?.value;
     this.preguntas.telefono =this.encuestaForm.get('telefono')?.value;
     this.servicioEncuesta.AgregarRespuesta(this.preguntas);
 
       alert('Gracias por responder!!');
   }
 
}
