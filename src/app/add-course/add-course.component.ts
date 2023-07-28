import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course = new Course();
  constructor(private courseService: CourseService, private router:Router){}

  ngOnInit(): void {
    
  }
  addCourse(){
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe();
    this.router.navigate(['courses']);
  }

}
