import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from 'src/app/models/post';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  // checking the event emitter
  it('should raise an event when the post delete is clicked', () => {
    const post: Post = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    component.post = post;

    component.delete.pipe(first()).subscribe(selectedPost =>{
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });
});
