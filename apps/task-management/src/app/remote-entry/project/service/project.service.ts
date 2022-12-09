/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content } from './project';

const url = 'http://10.2.6.142:8092/api/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  public getProject(
    pageNumber: number,
    pageSize: number,
    txtSearch?: string
  ): Observable<any> {
    return this.http.get(url, { params: { pageNumber, pageSize } });
  }

  public addProject(project: content): Observable<any> {
    return this.http.post(url, project);
  }
}
