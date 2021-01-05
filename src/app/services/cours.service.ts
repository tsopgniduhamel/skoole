import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  apiUrl: string = 'http://franklinduval.pythonanywhere.com/';

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get(this.apiUrl + `api/course`);
  }
}
