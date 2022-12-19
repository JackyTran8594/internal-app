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
import { BoardTaskFormComponent } from './board-task-form/board-task-form.component';

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
    private element: ElementRef,
    private modalService: NzModalService
  ) {}

  ngAfterViewChecked(): void {
    // this.checkInput();
  }

  ngOnInit(): void {
    // this.addToDo();
  }

  onKeydown(e: any) {
    e.preventDefault();
  }

  onView(item: Form): void {
    this.modalService.create({
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
