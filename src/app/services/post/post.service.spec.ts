import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  let httpClientSpy: jasmine.SpyObj<HttpClientTestingModule>;
  let POSTS = [{
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // check whether only the selected request is made
    httpTestingController.verify();
  });

  describe('get()', () => {
    it('should return expected posts when getPosts is called', (done: DoneFn) => {
      service.get().subscribe(data => {
        expect(data).toEqual(POSTS);
        done();
      });
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
      request.flush(POSTS);
      expect(request.request.method).toBe('GET');
    })
  });

  describe('getById()', () => {
    it('should return expected post when getPost is called with post id', (done: DoneFn) => {
      service.getById(1).subscribe(data => {
        expect(data).toEqual(POSTS[0]);
        done();
      });
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/1');
      request.flush(POSTS[0]);
      expect(request.request.method).toBe('GET');
    })
  });

  describe('delete()', () => {
    it('should return expected value when delete method is called', (done: DoneFn) => {
      service.delete(POSTS[0]).subscribe(data => {
        expect(data).toEqual({});
        done();
      });
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/1');
      request.flush({});
      expect(request.request.method).toBe('DELETE');
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
