/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'internal-app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.scss'],
})
export class TaskTagComponent implements OnInit {
  formValidation!: FormGroup;
  isConfirmLoading = false;

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.formValidation.get('name');
  }

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      name: ['', []],
    });
  }
}
