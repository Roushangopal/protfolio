import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {studentDetail} from './student';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  url = "http://localhost:3000/Student";

  constructor(private http:HttpClient) { }
  getStudent():Observable<studentDetail[]>{
    return this.http.get<studentDetail[]>(this.url);
  }
}
