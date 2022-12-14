/* eslint-disable @typescript-eslint/ban-types */
import { Observable } from 'rxjs';

export interface Project {
  pagingData: test;
}

export interface test {
  content: [content];
}
export interface content {
  attachFile?: string;
  createdBy: string;
  createdDate: string;
  customerId: number;
  endDate: string;
  id?: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  name: string;
  parentId?: number;
  readEndDate: string;
  readStartDate: string;
  revenue?: number;
  startDate: string;
  status: string;
  totalCost: number;
  totalHour: number;
}

export interface PageObject {
  pageNumber: number;
  pageSize: number;
  size?: number;
  totalElements: number;
  totalPages?: number;
}

export interface TableData<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
}

export abstract class ProjectData {
  abstract paging(
    pageNumber: number,
    pageSize: number,
    txtSearch: string
  ): Observable<TableData<content>>;
  abstract add(item: Project): Observable<Project>;
  abstract update(item: Project): Observable<Project>;
  abstract getById(id: number): Observable<Project>;
  abstract delete(id: number): Observable<Boolean>;
  abstract deleteAll(listId: number[]): Observable<Boolean>;
}
