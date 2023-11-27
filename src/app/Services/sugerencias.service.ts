import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';

//Primero el http
import { HttpClient } from '@angular/common/http';
//import {INote, Responsave } from '../Shared/data';

//Lo otro el objeto
//Despues el tipo de respuesta que voy a devolver

//aqui voy a importar el interface
//necesita un list - vamos a devolver la sugerencia
//Importar los modulos para bd con firestore
import{AngularFirestore} from '@angular/fire/compat/firestore';
//Importamos nuestro modelos que creamos
import { Post } from "../post.model";
@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {
  //apiUrl="/Sugerencias";
  constructor(private angularFirestore : AngularFirestore) { }
//  constructor(protected http:HttpClient) { }

  //Metodo que el listado de las sugerencias
  //Ahora cdebo exportar esto

  //list(): Observable <Response>{
    //return this.http.get<Response>(this.apiUrl);

  //Metodo para el get

  //}
  //Ahora crearemos los metodos que vamos a utilizar para el crud
  //Funciones
  //Traer los documentos Listar
  getPosts(){
    return this.angularFirestore
      .collection ("posts")
      .snapshotChanges()
  }
  //Traer un solo documento Buscar
  getPostById(id){
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .valueChanges()

  }
  //Crear un documento
  createPost(post: Post){
    return new Promise<any> ((resolve, reject) => {
      this.angularFirestore
      .collection("posts")
      .add(post)
      .then ((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }
  //Para actulizar
  updatePost(post: Post, id){
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .update({
      name: post.name,
      email: post.email,
      cell: post.cell,
      comments: post.comments
    });
  }
  //Para eliminar
  deletePost(post){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete();
  }
}
