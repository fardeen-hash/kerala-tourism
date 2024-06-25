import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from '../../public/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = '../../public/assets/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
