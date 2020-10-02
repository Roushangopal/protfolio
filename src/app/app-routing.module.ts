import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component'
import { EducationComponent } from './education/education.component'

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'education', component: EducationComponent },
  { path: 'mainpage', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [EducationComponent, MainpageComponent]


