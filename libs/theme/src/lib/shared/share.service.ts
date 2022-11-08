import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShareService {

    public isCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;

    constructor() {
        //do something
    }



}
