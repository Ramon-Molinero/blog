import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  allPost: Post[];
  postFiltrados: Post[];

  constructor(private postService: PostService) {
    this.allPost = [];
  }

  ngOnInit() {
    this.mostrarPosts();
  }

  async filtrar() {
    let categoria = (<HTMLInputElement>document.getElementById('selector'))
      .value;
    this.allPost = await this.postService.getPostsByCategoria(categoria);

    //console.log(this.postFiltrados);
  }

  async mostrarPosts() {
    this.allPost = await this.postService.getAllPosts();
    const reverse = this.allPost.reverse();
    this.allPost = reverse;
  }
}
