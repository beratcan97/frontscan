import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSourceService {

  constructor(private http: HttpClient) { }

  getSource(url): any {
    this.http.get(url).subscribe(
      data => {
        console.log('success', data);
        return data;
      },
      error => console.log('oops', error)
    );
  }
}