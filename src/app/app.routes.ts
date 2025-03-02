import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projectlist/:id', component: ProjectListComponent },
];
