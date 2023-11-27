import { Component, OnInit } from '@angular/core';
//Importar los servicios
import { SugerenciasService } from 'src/app/Services/sugerencias.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-sugerencias',
  templateUrl: './actualizar-sugerencias.component.html',
  styleUrls: ['./actualizar-sugerencias.component.scss']
})
export class ActualizarSugerenciasComponent implements OnInit{
  public editForm: FormGroup
  postRef:any
  constructor(
    public postService: SugerenciasService,
    public formBuilder: FormBuilder,
    public activeRoute: ActivatedRoute,
    public router:  Router
  ){
    this.editForm = this.formBuilder.group({
      name:[''],
      email:[''],
      cell: [''],
      comments:[''],
    })
  }
  ngOnInit():void{
   const id= this.activeRoute.snapshot.paramMap.get('id')
   this.postService.getPostById(id).subscribe(res=>{
    this.postRef = res
    this.editForm = this.formBuilder.group({
      name:[this.postRef.name],
      email:[this.postRef.email],
      cell: [this.postRef.cell],
      comments:[this.postRef.comments],
    })
   })
  }

  onSubmit(){
    const id= this.activeRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value,id)
    this.router.navigate(['home'])
  }
}
