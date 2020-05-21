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

  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.allPost = await this.postService.getAllPosts();
  }
}
