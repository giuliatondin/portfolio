import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppExperiencesComponent } from './app-experiences/app-experiences.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent},
  { path: 'projects', component: AppProjectsComponent },
  { path: 'experiences', component: AppExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
