import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/createProject';
  constructor(private http: HttpClient) {}

  getProject(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createProject(projectData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, projectData);
  }

  getProjectId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
