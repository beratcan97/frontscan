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
}
