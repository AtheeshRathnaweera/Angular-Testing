import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.get().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: Post) {
    this.posts = this.posts.filter((p) => {
      return p.id != post.id
    });

    this.postService.delete(post).subscribe((res) => {
      console.log('Deleted successfully : '+res);
    });
  }
}
