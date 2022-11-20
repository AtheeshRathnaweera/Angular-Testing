import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LoggerService]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messages at starting', () => {
    // the logic has writted in TRIPLE A pattern

    // act
    let count = service.messages.length;

    // assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called', () => {

    // act
    service.log('Test message');

    // assert
    expect(service.messages.length).toBe(1);
  });

  it('should clear the messages when clear is called', () => {
    // arrange
    service.log('Test message');

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  });
});
