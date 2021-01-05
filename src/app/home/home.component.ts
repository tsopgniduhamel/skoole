import { Component, OnInit } from '@angular/core';
import { CoursService } from './../services/cours.service';
import { ClassesService } from './../services/classes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: any;
  classes: any;

  constructor(
    private courseService: CoursService,
    private classesService: ClassesService
  ) {}

  ngOnInit(): void {
    this.AllCourses();
    this.AllClasses();
  }

  AllCourses() {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  AllClasses() {
    this.classesService.getAllClasses().subscribe((classes) => {
      this.classes = classes;
      console.log(this.classes);
    });
  }
}
