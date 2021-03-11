import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from '../student-detail.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private studentDetail:StudentDetailService) { }
  public student = [];
  public student1;

  ngOnInit(): void {
    this.studentDetail.getStudent().subscribe(data => {
      this.student = data;
      this.student1 = this.student[1];
    })
  }
  collegeName = "Hema"
  pucName = "Maltidhari College"
  schoolName = "Patliputra Central School"
  course = "BE"
  coursePuc = "Intermediate"
  courseSchool = "School"
  courseDuration = "2017-2021"
  schoolDuration = "2004-2014"
  pucDuration = "2014-2017"
  aggregatecollege = "7.2"
  aggregatePuc = "53"
  aggregateSchool = "9.5"
  collegeAdress = "Bengaluru-560074"
  pucAdress = "Patna-801109"
  schoolAdress = "Patna-801102"
}
