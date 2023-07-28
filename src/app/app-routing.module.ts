import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'add-course', component: AddCourseComponent }, // Update the path to 'add-course'
  {path:'update-course', component:UpdateCourseComponent},
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
