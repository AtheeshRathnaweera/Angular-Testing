import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let mockLoggerService: any;

  beforeEach(() => {
    console.log("calling before each");
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [CalculatorService, {
        provide: LoggerService,
        useValue: mockLoggerService
      }]
    });

    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // paused
  it('should do nothing', () => {
    pending();
  });

  // paused
  xit('should do nothing', () => { });

  it('should add two numbers', () => {
    console.log("calling add");
    let result = service.add(4, 5);
    expect(result).toBe(9);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log("calling subtract");
    let result = service.subtract(4, 5);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

});
