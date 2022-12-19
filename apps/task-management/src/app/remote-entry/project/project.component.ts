/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectFormComponent } from './project-form/project-form.component';
import { content, Project } from './service/project';
import { ProjectService } from './service/project.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from './delete/delete.component';

enum ModeModal {
  CREATE = 'create',
  UPDATE = 'update',
  VIEW = 'view',
}

interface PageObject {
  pageNumber: number;
  pageSize: number;
  size?: number;
  totalElements: number;
  totalPages?: number;
}

@Component({
  selector: 'internal-app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(
    private service: ProjectService,
    private router: Router,
    private modalService: NzModalService,
    private notifyService: NzNotificationService
  ) {}

  public listData: any;

  page: PageObject = {
    pageNumber: 1,
    pageSize: 10,
    totalElements: 0,
  };

  public pageNumber = 1;
  public pageSize = 100;
  // public txtSearch = '1';

  modalOptions: any = {
    nzDuration: 2000,
  };

  ngOnInit(): void {
    this.getProject();
    // this.addProject();
  }

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

  onCreate(): void {
    this.modalService
      .create({
        nzTitle: 'New Project',
        nzClassName: 'modal-custom',
        nzContent: ProjectFormComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Thêm yêu cầu',
        },
        nzDirection: 'ltr', // left to right
      })
      .afterClose.subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.notifyService.success(
              'Thành công',
              'Thêm mới yêu cầu',
              this.modalOptions
            );
          }
          // this.searchData();
        },
        error: (res) => {
          console.log(res);
        },
      });
  }

  onUpdate(item: content): void {
    this.modalService
      .create({
        nzTitle: 'Update Project',
        nzClassName: 'modal-custom',
        nzContent: ProjectFormComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.UPDATE,
          id: item.id,
        },
        nzDirection: 'ltr', // left to right
      })
      .afterClose.subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.notifyService.success(
              'Thành công',
              'Chỉnh sửa yêu cầu',
              this.modalOptions
            );
          }
          // this.searchData();
        },
        error: (res) => {
          console.log(res);
        },
      });
  }

  onView(item: content): void {
    this.modalService.create({
      nzTitle: 'View Project',
      nzClassName: 'modal-custom',
      nzContent: ProjectFormComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'View Project',
        id: item.id,
      },
      nzDirection: 'ltr', // left to right
    });
  }

  onDelete(id: number): void {
    this.modalService
      .create({
        nzTitle: 'Delete Project',
        nzClassName: 'modal-custom',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr', // left to right
      })
      .afterClose.subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.service.deleteProject(id).subscribe({
              next: (res) => {
                if (res) {
                  this.notifyService.success(
                    'Thành công',
                    'Xóa yêu cầu',
                    this.modalOptions
                  );
                }
                // this.searchData();
              },
              error: (err) => {
                console.log(err);
              },
              complete: () => {},
            });
          }
        },
        error: (res) => {
          console.log(res);
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
