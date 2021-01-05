import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  apiUrl: string = 'http://franklinduval.pythonanywhere.com/';

  constructor(private http: HttpClient) {}

  getAllClasses() {
    return this.http.get(this.apiUrl + `api/classe`);
  }
}
