/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { TaskTagService } from './service/task-tag.service';

@Component({
  selector: 'internal-app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.scss'],
})
export class TaskTagComponent implements OnInit {
  formValidation!: FormGroup;
  isConfirmLoading = false;
  isVisible = false;

  public listData: any;
  public pageNumber = 1;
  public pageSize = 999;
  public txtSearch: string | undefined;

  constructor(
    private fb: FormBuilder,
    private service: TaskTagService,
    private modelRef: NzModalRef<TaskTagComponent>
  ) {}

  get name() {
    return this.formValidation.get('name');
  }

  ngOnInit(): void {
    this.getTag();
    this.formValidation = this.fb.group({
      name: ['', []],
    });
  }

  public getTag() {
    this.service
      .getTag(this.pageNumber, this.pageSize, this.txtSearch)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.listData = res.pagingData.content;
          // console.log(this.listData);
          // this.totalElements = res.pagingData.totalElements;
          // this.totalPages = res.pagingData.totalPages;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  handleCancel(): void {
    this.isVisible = false;
    this.modelRef.close();
  }
}
