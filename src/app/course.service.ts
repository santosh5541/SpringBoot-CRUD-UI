import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  //get all courses
  baseURL="http://localhost:8080/api/courses";
  addUrl="http://localhost:8080/api/course";
  id?:number;
  constructor(private httpClient:HttpClient) { }
  //get all courses
  getAllCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
  }
  //add course
  addCourse(course: Course):Observable<Object> {
    return this.httpClient.post<Object>(`${this.addUrl}`,course);
  }

  //get course by id
getId(getId?:number){
this.id=getId;
}
  getCourseById(id?:number):Observable<Object>{
    return this.httpClient.get<Object>(`${this.addUrl}/${this.id}`)
  }


  //update course by id

  updateCourseById(course:Course):Observable<Object>{
    return this.httpClient.put(`${this.addUrl}/${this.id}`,course);
  }

  //delete course by id

  deleteCourseById(id?: number): Observable<Object> {
    return this.httpClient.delete(`${this.addUrl}/${id}`);
  }
}
