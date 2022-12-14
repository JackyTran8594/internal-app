/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardViewService } from '../service/board-view.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { content } from '../service/task';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TaskTagComponent } from '../../task-tag/task-tag.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { ActivatedRoute } from '@angular/router';

enum ModeModal {
  CREATE = 'create',
  UPDATE = 'update',
  VIEW = 'view',
}

@Component({
  selector: 'internal-app-board-task-form',
  templateUrl: './board-task-form.component.html',
  styleUrls: ['./board-task-form.component.scss'],
})
export class BoardTaskFormComponent implements OnInit {
  public fileAction: string | null = null;
  formValidation!: FormGroup;
  isConfirmLoading = false;
  checked = false;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  @Input() projectId!: number;

  isVisible = false;

  error = '';

  startValue: any;
  endValue: Date | null = null;

  constructor(
    private fb: FormBuilder,
    private service: BoardViewService,
    private modalService: NzModalService,
    private msg: NzMessageService,
    private route: ActivatedRoute,
    private modelRef: NzModalRef<BoardTaskFormComponent>
  ) {}

  get name() {
    return this.formValidation.get('name');
  }

  get parentId() {
    return this.formValidation.get('parentId');
  }

  get revenue() {
    return this.formValidation.get('revenue');
  }

  get startDate() {
    return this.formValidation.get('rangeDate')?.value[0];
  }

  get endDate() {
    return this.formValidation.get('rangeDate')?.value[1];
  }

  get rangeDate(): FormArray {
    return this.formValidation.get('rangeDate') as FormArray;
  }

  get realStartDate() {
    return this.formValidation.get('realStartDate');
  }

  get realEndDate() {
    return this.formValidation.get('realEndDate');
  }

  get totalCost() {
    return this.formValidation.get('totalCost');
  }

  get totalHour() {
    return this.formValidation.get('totalHour');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get attachFile() {
    return this.formValidation.get('attachFile');
  }

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      parentId: ['', []],
      revenue: ['', [Validators.pattern('^[0-9]*$')]],
      startDate: ['', []],
      endDate: ['', []],
      rangeDate: ['', []],
      // realStartDate: ['', []],
      // realEndDate: ['', []],
      totalCost: ['', []],
      totalHour: ['', []],
      description: ['', []],
      attachFile: ['', []],
    });

    // this.formValidation.setValue({
    //   startDate: this.startDate,
    //   endDate: this.endDate,
    // });

    console.log(this.projectId);

    if (this.mode != ModeModal.CREATE) {
      if (this.id) {
        this.getById(this.id);
      }
    }
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }

    this.fileAction = info.file.name;
  }

  public getIdProject() {
    let id: number = 0;
    console.log(this.route.snapshot.paramMap.get('id'));
    id = parseInt(this.route.snapshot.paramMap.get('id')!);
    return console.log(id);
  }

  getById(id: number) {
    this.service.getTaskById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.formValidation.setValue({
          // id: res.data.id,
          name: res.data.name,
          parentId: res.data.parentId,
          revenue: res.data.revenue,
          startDate: res.data.startDate,
          endDate: res.data.endDate,
          rangeDate: [res.data.startDate, res.data.endDate],
          // realStartDate: res.data.realStartDate,
          // realEndDate: res.data.realEndDate,
          totalCost: res.data.totalCost,
          totalHour: res.data.totalHour,
          description: res.data.description,
          attachFile: res.data.attachFile,
          // isChecked: res.data.isChecked,
        });
      },
    });
  }

  handleOk(): void {
    debugger;
    this.isConfirmLoading = true;
    const item: content = this.formValidation.value;
    item.startDate = this.startDate;
    item.endDate = this.endDate;
    item.projectId = this.projectId;
    if (this.mode == ModeModal.CREATE) {
      this.service.addTask(item).subscribe({
        next: (res: content) => {
          console.log(res);
          if (res) {
            this.isVisible = false;
            this.isConfirmLoading = false;
            this.modelRef.close(res);
          }
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('done');
        },
      });
    } else if (this.mode == ModeModal.UPDATE) {
      this.service.updateTask(this.id, item).subscribe({
        next: (res: content) => {
          console.log(res);
          if (res) {
            this.isVisible = false;
            this.isConfirmLoading = false;
            this.modelRef.close(res);
          }
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('done');
        },
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.modelRef.close();
  }

  getStartDate() {
    debugger;
    this.startValue = this.formValidation.get('startDate')?.value;
    let a = this.startDate;
    console.log(this.startValue);
    console.log(a);
    return console.log(this.startValue);
  }

  onCreateTag(): void {
    this.modalService.create({
      nzTitle: 'Tag',
      nzFooter: null,
      nzClassName: 'modal-custom',
      nzContent: TaskTagComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzDirection: 'ltr', // left to right
    });
  }
}
