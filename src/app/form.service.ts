import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class FormService {
  constructor(private http: HttpClient){}

  getUserData(jsonLink: string): Observable<any> {
    return forkJoin([this.getUser(), this.getFields(jsonLink)]);
  }

  getUser(){
    return this.http.get<{ name: string }>('assets/json-powered/user.json');
  }

  getFields(jsonLink: string) {
    return this.http.get<FormlyFieldConfig[]>(jsonLink);
  }

  getLangs(){
    return this.http.get<{ label: string, value: string }[]>('assests/json-powered/lang-options.json');

  }
}
