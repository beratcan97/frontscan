import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeCheckerService {

  constructor() { }

  comment(code): boolean {
    let conditions = ['if', 'else'];
    return conditions.some(condition => code.includes(condition));
  }

  variableType(code): boolean {
    //Variable
     const splitedCode = code.split(' ')
     if (
       splitedCode.length == 1 &&
       splitedCode[0].charAt(code.length-1) == ';' &&
       splitedCode[0].length > 2) {
       if(!splitedCode[0].includes(':')) {
         return true;
       }
     }
    //If statement
    return false;
  }
}
