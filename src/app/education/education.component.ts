import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
collegeName = "Vivekananda Institute Of Technology"
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
