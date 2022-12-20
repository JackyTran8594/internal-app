/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { animate, style, transition, trigger } from '@angular/animations';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BoardTaskFormComponent } from './board-task-form/board-task-form.component';
import { DeleteComponent } from './delete/delete.component';
import { BoardViewService } from './service/board-view.service';
import { content } from './service/task';

interface BoardList {
  id: number;
  name: string;
  title: List[];
}

interface List {
  id: number;
  name: string;
}

interface Form {
  id: number;
  name: string;
}

enum ModeModal {
  CREATE = 'create',
  UPDATE = 'update',
  VIEW = 'view',
}

@Component({
  selector: 'internal-app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss'],
})
export class BoardViewComponent implements OnInit, AfterViewChecked {
  public pageNumber = 1;
  public pageSize = 999;
  public txtSearch: string | undefined;
  public totalElements = 0;
  public totalPages: number | undefined;

  // public tagList: any;
  public taskList: any;
  public taskContent: any;

  modalOptions: any = {
    nzDuration: 2000,
  };

  todo: List[] = [
    { id: 1, name: 'Test1' },
    { id: 2, name: 'Test2' },
  ];

  doing: List[] = [
    { id: 1, name: 'Test3' },
    { id: 2, name: 'Test4' },
  ];

  done: List[] = [
    { id: 1, name: 'Test5' },
    { id: 2, name: 'Test6' },
    { id: 3, name: 'Test7' },
  ];

  board: BoardList[] = [
    {
      id: 1,
      name: 'TODO',
      title: this.todo,
    },
    { id: 2, name: 'DOING', title: this.doing },
    { id: 3, name: 'DONE', title: this.done },
  ];

  public addtodo = false;
  public adddoing = false;
  public adddone = false;

  public edittodo: number | null = null;
  public editdoing: number | null = null;

  public isEdit = false;

  public t: unknown;
  isVisible = false;

  constructor(
    private service: BoardViewService,
    private element: ElementRef,
    private modalService: NzModalService,
    private notifyService: NzNotificationService
  ) {}

  ngAfterViewChecked(): void {
    // this.checkInput();
  }

  ngOnInit(): void {
    // this.getTag();
    this.getTask();
  }

  onKeydown(e: any) {
    e.preventDefault();
  }

  // public getTag() {
  //   this.service
  //     .getTag(this.pageNumber, this.pageSize, this.txtSearch)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.tagList = res.pagingData.content;
  //         // console.log(this.listData);
  //         this.totalElements = res.pagingData.totalElements;
  //         this.totalPages = res.pagingData.totalPages;
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  // }

  public getTask() {
    this.service
      .getTask(this.pageNumber, this.pageSize, this.txtSearch)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.taskList = res.pagingData.content;
          // console.log(this.listData);
          this.totalElements = res.pagingData.totalElements;
          this.totalPages = res.pagingData.totalPages;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onView(item: content): void {
    this.modalService.create({
      nzTitle: 'View Task',
      nzClassName: 'modal-custom',
      nzContent: BoardTaskFormComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi tiết yêu cầu',
        id: item.id,
      },
      nzDirection: 'ltr', // left to right
    });
  }

  onCreate(): void {
    this.modalService
      .create({
        nzTitle: 'New Task',
        nzClassName: 'modal-custom',
        nzContent: BoardTaskFormComponent,
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
          this.getTask();
        },
        error: (res) => {
          console.log(res);
        },
      });
  }

  onUpdate(item: content): void {
    this.modalService
      .create({
        nzTitle: 'Update Task',
        nzClassName: 'modal-custom',
        nzContent: BoardTaskFormComponent,
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
          this.getTask();
        },
        error: (res) => {
          console.log(res);
        },
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
            this.service.deleteTask(id).subscribe({
              next: (res) => {
                if (res) {
                  this.notifyService.success(
                    'Thành công',
                    'Xóa yêu cầu',
                    this.modalOptions
                  );
                }
                this.getTask();
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

  addToDo() {
    if (this.addtodo == false) this.addtodo = true;
  }

  addDoing() {
    if (this.adddoing == false) this.adddoing = true;
  }

  addDone() {
    if (this.adddone == false) this.adddone = true;
  }

  startEditToDo(idx: number) {
    this.edittodo = idx;
    this.isEdit = true;
  }

  stopEditToDo() {
    this.edittodo = null;
    this.isEdit = false;
  }

  startEditDoing(idx: number) {
    this.editdoing = idx;
  }

  stopEditDoing() {
    this.editdoing = null;
  }

  addToDoArray() {
    const inputToDo = this.element.nativeElement.querySelector('#inputToDo');
    const inputValue = inputToDo.value;
    const lastElement = this.todo[this.todo.length - 1];
    console.log(inputValue);
    if (inputValue) {
      this.todo.push({ id: lastElement.id + 1, name: inputValue });
      this.addtodo = false;
    }
  }

  // editToDoArray(t: unknown) {
  //   const editToDo = this.element.nativeElement.querySelectorAll('.editToDo');
  //   // console.log(editToDo);

  //   for (let i = 0; i <= this.todo.length; i++) {
  //     if (t == this.todo[i]) {
  //       // console.log(this.todo[i]);
  //       this.todo[i].name = editToDo.value;
  //       this.edittodo = null;
  //     }
  //   }
  //   // console.log(test);
  // }

  addDoingArray() {
    const inputToDo = this.element.nativeElement.querySelector('#inputDoing');
    const inputValue = inputToDo.value;
    console.log(inputValue);
    this.doing.push(inputValue);
    this.adddoing = false;
  }

  addDoneArray() {
    const inputToDo = this.element.nativeElement.querySelector('#inputDone');
    const inputValue = inputToDo.value;
    console.log(inputValue);
    this.done.push(inputValue);
    this.adddone = false;
  }

  // hideInput() {
  //   if (this.addnew == true) this.addnew = false;
  // }

  drop(event: CdkDragDrop<List[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.item);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.container.data[event.currentIndex]);
    }
  }

  dropGroup(event: CdkDragDrop<BoardList[]>) {
    moveItemInArray(this.board, event.previousIndex, event.currentIndex);
  }
}
