import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  allPost: Post[];

  constructor() {
    this.allPost = [
      {
        titulo: 'titulo',
        texto: 'parrafo',
        autor: 'menganito',
        imagen: 'url',
        fecha: '',
        categoria: '',
      },
      {
        titulo: 'titulo',
        texto: 'parrafo',
        autor: 'menganito',
        imagen: 'url',
        fecha: '',
        categoria: '',
      },
    ];
    console.log(this.allPost);
  }

  agregarPost({
    titulo,
    texto,
    autor,
    imagen,
    fecha,
    categoria,
  }): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const newPost = new Post(titulo, texto, autor, imagen, fecha, categoria);
      this.allPost.push(newPost);
      resolve(this.allPost);
    });
  }

  getAllPosts(): Promise<Post[]> {
    const resolve = new Promise<Post[]>((resolve, reject) => {
      resolve(this.allPost);
    });
    return resolve;
  }

  /* getPostsByCategoria(cat: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject)=>{
      const 
    })
  } */
}
