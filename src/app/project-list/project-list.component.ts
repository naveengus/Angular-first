import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  project: any = {};
  http = inject(HttpClient);

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const id: string = data['id'];
      this.getProject(id);
    });
  }

  getProject(id: string) {
    this.projectService.getProjectId(id).subscribe((res: any) => {
      this.project = res;
    });
  }

  onBack() {
    this.router.navigate(['']);
  }

  onDelete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this project?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectService.deleteProject(id).subscribe({
          next: () => {
            alert('Project deleted successfully');
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('Error deleting project:', err);
          },
        });
      }
    });
  }
}
