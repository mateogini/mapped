import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { tool } from './tools-list/tool';
const URL = "https://668300f14102471fa4c8ee52.mockapi.io/mapped";
@Injectable({
  providedIn: 'root'
})
export class ToolDataService {

  constructor(private http: HttpClient) { }
  public getAll(): Observable<tool[]> {
   return this.http.get<tool[]>(URL)
   .pipe(tap((tools: tool[]) => tools.forEach(tool => tool.quantity = 0)));

  }
}
