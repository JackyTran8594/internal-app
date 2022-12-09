/* eslint-disable @typescript-eslint/ban-types */
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectApi {
  private readonly apiController = 'Project';

  constructor(private serviceBase: ProjectService) {}

  // add(item: Project): Observable<Project> {
  //   return this.serviceBase.post(this.apiController, item);
  // }

  // update(item: Project): Observable<Project> {
  //   return this.serviceBase.put(`${this.apiController}/${item.id}`, item);
  // }

  // getById(id: number): Observable<Project> {
  //   return this.serviceBase.get(`${this.apiController}/${id}`);
  // }

  // delete(id: number): Observable<Boolean> {
  //   return this.serviceBase.delete(`${this.apiController}/${id}`);
  // }
  // deleteAll(listId: number[]): Observable<Boolean> {
  //   return this.serviceBase.post(`${this.apiController}/deleteAll`, listId);
  // }
}
