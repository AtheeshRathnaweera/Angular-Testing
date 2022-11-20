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

  getById(id:number){
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  delete(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
