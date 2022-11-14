import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  // let fixture: ComponentFixture<PostsComponent>;
  let POSTS: Post[];
  let mockPostService: any;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [PostsComponent]
    // })
    //   .compileComponents();

    // fixture = TestBed.createComponent(PostsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

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
      providers: [
        PostsComponent,
        {
          provide: PostService,
          useValue: mockPostService
        }]
    });

    component = TestBed.inject(PostsComponent);
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
});
