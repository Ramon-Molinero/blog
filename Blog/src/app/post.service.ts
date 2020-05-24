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
        titulo: 'The best white house',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://www.mydomaine.com/thmb/hFSx4r6ymYnrZWa-AFYnAnfMeKs=/700x700/smart/filters:no_upscale()/cdn.cliqueinc.com__cache__posts__273792__best-interior-design-accounts-on-instagram-273792-1543527624304-image.700x0c-82b6a3b247eb4d2a97862280e74992b3.jpg',
        fecha: '24 Abril 2020',
        categoria: 'Interior',
      },
      {
        titulo: 'Behind the last one goes no one goes',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://www.afolmonzabrianza.it/wp-content/uploads/2015/10/11202959_798432133608426_7901531099423487546_n.jpg',
        fecha: '24 Abril 2020',
        categoria: 'Web',
      },
      {
        titulo: 'The from lost to the river',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://i.pinimg.com/474x/3a/4d/a8/3a4da82934556dfc995deb42337ffc52.jpg',
        fecha: '24 Abril 2020',
        categoria: 'UI/UX',
      },
      {
        titulo: 'The sing of colors',
        texto:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, quibusdam labore eum deserunt reprehenderit dicta quae quos perferendis ipsum libero? Iure veritatis delectus saepe modi vitae animi assumenda perferendis?',
        autor: 'menganito',
        imagen:
          'https://www.pasku.com/wp-content/uploads/2018/09/combinacion-colores-cuadrada.png',
        fecha: '24 Abril 2020',
        categoria: 'Graphic',
      },
    ];
  }

  agregarPost(nuevoPost: Post) {
    this.allPost.unshift(nuevoPost);
    this.allPost = this.allPost.reverse();
  }

  getAllPosts(): Promise<Post[]> {
    const resolve = new Promise<Post[]>((resolve, reject) => {
      this.allPost.sort();
      resolve(this.allPost);
    });
    return resolve;
  }

  getPostsByCategoria(categoria): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = [];
      this.allPost.filter((resultado) => {
        // resultado.categoria === categoria
        //   ? arrFiltrado.push(resultado)
        //   : resolve(this.allPost);

        if (resultado.categoria === categoria) {
          arrFiltrado.push(resultado);
        } else if (categoria === '') {
          resolve(this.allPost);
        }
        resolve(arrFiltrado);
      });
      // console.log(this.allPost);
    });
  }
}
