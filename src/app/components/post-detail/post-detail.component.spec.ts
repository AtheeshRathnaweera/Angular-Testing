import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';

import { Location } from '@angular/common';
import { PostService } from 'src/app/services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockPostService:jasmine.SpyObj<PostService>;

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

  beforeEach(async () => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          }
        }
      }
    };
    mockPostService = jasmine.createSpyObj(['getById', 'update','get']);
    let mockLocation = jasmine.createSpyObj(['back']);

    await TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      imports:[FormsModule],
      providers:[{
        provide: Location,
        useValue: mockLocation
      },
      {
        provide: PostService,
        useValue: mockPostService
      },
      {
        provide: ActivatedRoute,
        useValue: mockActivatedRoute
      }]

    })
      .compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the post title in the h3 template', () => {
    mockPostService.getById.and.returnValue(of(POSTS[0]));
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement;
    expect(element.textContent).toBe(POSTS[0].title);
  });
});
