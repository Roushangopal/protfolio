import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from '../student-detail.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private studentDetail: StudentDetailService) { }
  profileimg = "../../assets/images/profilepic.jpg"
  public student = [];
  public student1;
  public name;

  ngOnInit(): void {
    this.studentDetail.getStudent()
      .subscribe(data => {
        this.student = data;
        this.student1 = this.student[0];
      });


  }


}
