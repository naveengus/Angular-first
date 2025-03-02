import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectForm!: FormGroup;
  http = inject(HttpClient);
  projectList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getUser();
  }

  initializeForm() {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      description: ['', Validators.required],
      Technologies: this.fb.array([]),
      teamMembers: this.fb.array([]),
      projectsLink: this.fb.array([]),
    });
  }

  get Technologies(): FormArray {
    return this.projectForm.get('Technologies') as FormArray;
  }

  get teamMembers(): FormArray {
    return this.projectForm.get('teamMembers') as FormArray;
  }

  get projectsLink(): FormArray {
    return this.projectForm.get('projectsLink') as FormArray;
  }

  addField(array: FormArray) {
    array.push(this.fb.control('', Validators.required));
  }

  removeField(array: FormArray, index: number) {
    array.removeAt(index);
  }

  addTechnology() {
    this.addField(this.Technologies);
  }
  removeTechnology(index: number) {
    this.removeField(this.Technologies, index);
  }

  addTeamMember() {
    this.addField(this.teamMembers);
  }
  removeTeamMember(index: number) {
    this.removeField(this.teamMembers, index);
  }

  addProjectLink() {
    this.addField(this.projectsLink);
  }
  removeProjectLink(index: number) {
    this.removeField(this.projectsLink, index);
  }

  getUser() {
    this.projectService.getProject().subscribe({
      next: (res) => {
        this.projectList = res;
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
      },
    });

    // this.http.get<any[]>('http://localhost:3000/createProject')
  }
  onView(id: string) {
    this.router.navigate(['/projectlist', id]);
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.createProject(this.projectForm.value).subscribe({
        next: (res) => {
          alert('Project created successfully');
          this.projectList.push(res);
          this.projectForm.reset();
          this.Technologies.clear();
          this.teamMembers.clear();
          this.projectsLink.clear();
        },
        error: (err) => {
          console.error('Error submitting form:', err);
        },
      });
    }
  }
}
