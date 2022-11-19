import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { Post } from 'src/app/models/post';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas:[NO_ERRORS_SCHEMA]
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

    component.delete.pipe(first()).subscribe(selectedPost => {
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });

  it('should render the post title in the anchor element', () => {
    const post: Post = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    component.post = post;
    fixture.detectChanges();
    const postElement : HTMLElement = fixture.nativeElement;
    const a  = postElement.querySelector('a');
    expect(a?.textContent).toEqual(post.title);
  });

  it('should render the post title in the anchor element using the debug element', () => {
    const post: Post = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    component.post = post;
    fixture.detectChanges();

    const postDebugElement : DebugElement= fixture.debugElement;
    const aElement : HTMLElement= postDebugElement.query(By.css('a')).nativeElement;
    expect(aElement.textContent).toEqual(post.title);
  });
});
