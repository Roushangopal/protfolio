import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {studentDetail} from './student';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  url = "../assets/student.json"

  constructor(private http:HttpClient) { }
  getStudent():Observable<studentDetail[]>{
    // return[
    //   {name:"Roushan", currentCourse:"be", courseDuration:"2017-2021", occupation:"software engineering",
    // email:"roushan@gmail.com", mobNo:"9060289830" }
    // ]
    return this.http.get<studentDetail[]>(this.url);
  }
}