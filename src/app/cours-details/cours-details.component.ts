import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/Cours';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.scss'],
})
export class CoursDetailsComponent implements OnInit {
  private coursactuel: any;

  constructor(private courseService: CoursService) {}

  ngOnInit(): void {
    this.coursactuel;
  }

  getCourse(id: string) {
    this.courseService.getCourse('2').subscribe((cours) => {
      this.coursactuel = cours;
    });
  }
}
