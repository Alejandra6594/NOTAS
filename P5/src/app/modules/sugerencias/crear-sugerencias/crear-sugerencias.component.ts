import { Component, OnInit } from '@angular/core';
//Importar
import { SugerenciasService } from 'src/app/Services/sugerencias.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-crear-sugerencias',
  templateUrl: './crear-sugerencias.component.html',
  styleUrls: ['./crear-sugerencias.component.scss'],
})
export class CrearSugerenciasComponent implements OnInit{
  public postForm:FormGroup
  constructor(
    public postService: SugerenciasService,
    public formBuilder: FormBuilder,
    public router:  Router
  ){
    this.postForm = this.formBuilder.group({
      name:[''],
      email:[''],
      cell: [''],
      comments:[''],
    })
  }
  ngOnInit(): void {

  }
  onSubmit(){
    this.postService.createPost(this.postForm.value)
    //this.router.navigate(['listarSu'])
    this.postForm.reset();
  }

}
