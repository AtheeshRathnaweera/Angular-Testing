import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postService.getById(+id).subscribe(post => {
      this.post = post
    });;
  }

  save(){
    this.postService.update(this.post).subscribe(()=>{
      this.goBack();
    });
  }

  goBack(){
    this.location.back();
  }

}
