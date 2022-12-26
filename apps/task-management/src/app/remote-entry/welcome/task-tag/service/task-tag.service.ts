/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';

const url = 'http://10.2.6.142:8092/api/tag';

@Injectable({
  providedIn: 'root',
})
export class TaskTagService {
  constructor(private http: HttpClient, private i18n: NzI18nService) {}

  switchLanguage() {
    this.i18n.setLocale(en_US);
  }

  public getTag(
    pageNumber: number,
    pageSize: number,
    txtSearch?: string
  ): Observable<any> {
    return this.http.get(
      `${url}?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${txtSearch}`
    );
  }
}
