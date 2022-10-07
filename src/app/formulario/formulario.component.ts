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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.initFrom();
  }

  initFrom(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      telefono2: ['', [Validators.required]],
      paginaweb: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required,Validators.email]],
      correo2: ['', [Validators.required,Validators.email]],
      razonsocial: ['', [Validators.required, Validators.minLength(25)]],
      servicioTextArea: ['', [Validators.required, Validators.minLength(25)]],
      nombreRepresentante: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      cedular: ['', [Validators.required]],
    });
  }
  enviarForm(values: any) {
    console.log(values);
  }
}
