import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public registerForm!: FormGroup;
  public btnCorp!: [{value:""}]
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.initFrom();
  }

  initFrom(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      telefonoR: ['', [Validators.required]],
      NombreRespon: ['', [Validators.required]],
      paginaweb: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required,Validators.email]],
      correoR: ['', [Validators.required,Validators.email]],
      correoCorp: ['', [Validators.required,Validators.email]],
      razonsocial: ['', [Validators.required, Validators.minLength(25)]],
      servicioTextArea: ['', [Validators.required, Validators.minLength(25)]],
      nombreRepresentante: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      celular: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      numeroResolucion: ['', [Validators.required]],
      codigoCI: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  addBtn(){

  }
  enviarForm(values: any) {
    console.log(values);
  }
}
