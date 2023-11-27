import { Component, OnInit } from '@angular/core';
//Importar el modelo
import { Post } from 'src/app/post.model';
import { SugerenciasService } from 'src/app/Services/sugerencias.service';

@Component({
  selector: 'app-listar-sugerencias',
  templateUrl: './listar-sugerencias.component.html',
  styleUrls: ['./listar-sugerencias.component.scss']
})
export class ListarSugerenciasComponent implements OnInit {
  Posts: Post[]
  constructor(private postService: SugerenciasService){}
    ngOnInit(): void{
      this.postService.getPosts().subscribe((res)=>{
        this.Posts = res.map((e)=>{
          return{
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Post)
          };
        });
      });
    }

    deleteRow = (post) => this.postService.deletePost(post);
}
