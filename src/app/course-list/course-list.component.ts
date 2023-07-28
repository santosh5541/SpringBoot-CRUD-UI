import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }

  updateCourseRecord(id?: number) {
    // Pass the course ID as a parameter to the route
      this.courseService.getId(id);
       this.router.navigate(['update-course']);
  }

  //delete course 
  deleteCourseRecord(id?: number) {
    this.courseService.deleteCourseById(id).subscribe(
      () => {
        // Remove the deleted course from the local courses array
        this.courses = this.courses.filter(course => course.cid !== id);
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }
  
}
