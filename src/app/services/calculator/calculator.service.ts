import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService:LoggerService) { }

  add(num1:number, num2:number){
    this.loggerService.log('Add operation is called');
    return num1+num2;
  }

  subtract(num1:number, num2:number){
    this.loggerService.log('Subtract operation is called');
    return num1-num2;
  }
}

