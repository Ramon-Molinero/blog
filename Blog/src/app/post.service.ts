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
        titulo: 'Detrás del último no va nadie',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg?auto=format%2Ccompress&dpr=1',
        fecha: '24 Abril 2020',
        categoria: 'Graphic Design',
      },
      {
        titulo: 'Sing of Colors',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://www.pasku.com/wp-content/uploads/2018/09/combinacion-colores-cuadrada.png',
        fecha: '24 Abril 2020',
        categoria: 'Web Desing',
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
