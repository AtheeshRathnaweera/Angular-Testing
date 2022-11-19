import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';
import { PostComponent } from '../post/post.component';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let POSTS: Post[];
  let mockPostService: any;

  beforeEach(async () => {
    POSTS = [{
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      'userId': 1,
      'id': 2,
      'title': 'qui est esse',
      'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      'userId': 1,
      'id': 3,
      'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
      'userId': 1,
      'id': 4,
      'title': 'eum et est occaecati',
      'body': 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
      'userId': 1,
      'id': 5,
      'title': 'nesciunt quas odio',
      'body': 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    }];

    mockPostService = jasmine.createSpyObj(['get', 'delete']);

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService
        }],
        schemas:[NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test suit for delete
  describe('delete', () => {
    beforeEach(() => {
      mockPostService.delete.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it('should delete the selected post from the posts', () => {
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(4);
    });

    it('should delete the actual selected post in posts array', () => {
      component.delete(POSTS[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once', () => {
      component.delete(POSTS[1]);
      expect(mockPostService.delete).toHaveBeenCalledTimes(1);
    });
  });

  it('should set posts from the service directly', () => {
    mockPostService.get.and.returnValue(of(POSTS));

    // ngOnit will be called
    fixture.detectChanges();
    expect(component.posts.length).toBe(POSTS.length);
  });

  it('should create one post child element for each post',()=>{
    mockPostService.get.and.returnValue(of(POSTS));
    fixture.detectChanges();

    const dubugElement = fixture.debugElement;
    const postElement = dubugElement.queryAll(By.css('.posts'));
    expect(postElement.length).toBe(POSTS.length);
  });

  it('should create exact same number of posts components for posts',()=>{
    mockPostService.get.and.returnValue(of(POSTS));
    fixture.detectChanges();

    // as we need to get the child components we are using the directive (By.directive) here
    const postComponentsDEs = fixture.debugElement.queryAll(By.directive(PostComponent));
    expect(postComponentsDEs.length).toEqual(POSTS.length);
  });
});
