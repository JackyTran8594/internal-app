/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { content, Project } from './service/project';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'internal-app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(private service: ProjectService, private router: Router) {}

  public listData: any;

  public postData: content = {
    attachFile: 'string',
    createdBy: 'string',
    createdDate: '2022-12-09T07:15:55.017Z',
    customerId: 0,
    endDate: '2022-12-09T07:15:55.017Z',
    lastModifiedBy: 'string',
    lastModifiedDate: '2022-12-09T07:15:55.017Z',
    name: 'string',
    parentId: 0,
    readEndDate: '2022-12-09T07:15:55.017Z',
    readStartDate: '2022-12-09T07:15:55.017Z',
    revenue: 0,
    startDate: '2022-12-09T07:15:55.017Z',
    status: 'string',
    totalCost: 0,
    totalHour: 0,
  };

  public pageNumber = 1;
  public pageSize = 50;
  // public txtSearch = '1';

  ngOnInit(): void {
    this.getProject();
    // this.addProject();
  }

  // afterViewInit(): void {
  //   this.addProject();
  // }

  public getProject() {
    this.service.getProject(this.pageNumber, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.listData = res.pagingData.content;
        console.log(this.listData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // public addProject() {
  //   this.service.addProject(this.postData).subscribe({
  //     next: (res) => {
  //       // console.log(res);
  //       this.postData = res.data;
  //       console.log(res.data);
  //       // this.router.navigateByUrl('welcome');
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
