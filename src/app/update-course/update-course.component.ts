import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  constructor(private router:Router, private courseService: CourseService){}

updateCourse(id?:number) {
this.courseService.updateCourseById(this.course).subscribe();
this.router.navigate(['courses']);
}
getCourseById(){
  this.courseService.getCourseById().subscribe(data=>{
  this.course=data;
  })
}
course:Course = new Course()

  ngOnInit(): void {
    this.getCourseById();
  }

}
