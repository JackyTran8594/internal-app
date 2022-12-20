/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardViewService } from '../service/board-view.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { content } from '../service/task';

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
  formValidation!: FormGroup;
  isConfirmLoading = false;
  checked = false;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;

  error = '';

  constructor(
    private fb: FormBuilder,
    private service: BoardViewService,
    private modelRef: NzModalRef<BoardTaskFormComponent>,
    private element: ElementRef
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
    return this.formValidation.get('startDate');
  }

  get endDate() {
    return this.formValidation.get('endDate');
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

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      parentId: ['', []],
      revenue: ['', [Validators.pattern('^[0-9]*$')]],
      startDate: ['', []],
      endDate: ['', []],
      // realStartDate: ['', []],
      // realEndDate: ['', []],
      totalCost: ['', []],
      totalHour: ['', []],
      description: ['', []],
    });

    if (this.mode != ModeModal.CREATE) {
      if (this.id) {
        this.getById(this.id);
      }
    }
  }

  compareDate() {
    let startDate = this.element.nativeElement.querySelector('#startDate');
    let endDate = this.element.nativeElement.querySelector('#endDate');
    console.log(startDate, endDate);
  }

  changeChecked() {
    this.checked = !this.checked;
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
          // realStartDate: res.data.realStartDate,
          // realEndDate: res.data.realEndDate,
          totalCost: res.data.totalCost,
          totalHour: res.data.totalHour,
          description: res.data.description,
          // isChecked: res.data.isChecked,
        });
      },
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    const item: content = this.formValidation.value;
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
    }
    // else if (this.mode == ModeModal.UPDATE) {
    //   this.service.updateProject(this.id, item).subscribe({
    //     next: (res: content) => {
    //       console.log(res);
    //       if (res) {
    //         this.isVisible = false;
    //         this.isConfirmLoading = false;
    //         this.modelRef.close(res);
    //       }
    //     },
    //     error: (err: any) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('done');
    //     },
    //   });
    // }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.modelRef.close();
  }
}
