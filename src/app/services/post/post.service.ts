import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  delete(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/post/${post.id}`);
  }
}
