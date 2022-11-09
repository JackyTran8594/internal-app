import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ShareService {

    public isCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;

    constructor() {
        //do something
    }

    inItMenu() {
        // do something;
    }



}
