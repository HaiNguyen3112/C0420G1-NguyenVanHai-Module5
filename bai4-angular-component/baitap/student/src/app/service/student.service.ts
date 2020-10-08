import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   url = 'http';
  constructor(private httpClient: HttpClient) {
  }
  getData(): Observable<Student[]> {
    // @ts-ignore
    return this.httpClient.get(this.url);
  }
}
