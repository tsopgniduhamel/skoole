import { Component, OnInit } from '@angular/core';
import { CoursService } from './../services/cours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: any;

  constructor(private courseService: CoursService) {}

  ngOnInit(): void {
    this.AllCourses();
  }

  AllCourses() {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }
}
