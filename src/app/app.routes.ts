import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projectlist/:id', component: ProjectListComponent },
];

//  {
//       "projectName": "E-commerce",
//       "description": "this is full stack ecommerce",
//       "Technologies": [
//         "Angular ",
//         "Node.js"
//       ],
//       "Achievements": [
//         "Integrated Stripe for payments",
//         "Stripe for payments"
//       ],
//       "teamMembers": [
//         "naveen",
//         "nivin",
//         "navin"
//       ],
//       "projectsLink": [
//         "vbjebvjbe",
//         "wlfweihfiewf"
//       ],
//       "id": "62e6"
//     },
//     {
//       "id": "5e9e",
//       "projectName": "ticket booking",
//       "description": "this is tb using mern ",
//       "Technologies": [],
//       "Achievements": [],
//       "teamMembers": [],
//       "projectsLink": []
//     },
//     {
//       "id": "4075",
//       "projectName": "data scientist",
//       "description": "this data scientist using angular",
//       "Technologies": "angular ",
//       "Achievements": [],
//       "teamMembers": [],
//       "projectsLink": []
//     }

// this.http
//       .post<Project>('http://localhost:3000/createProject', this.projectObj)
//       .subscribe((res: Project) => {
//         alert('User created successfully');
//         this.projectList.push(res);
//         this.projectObj = new Project();
//       });
