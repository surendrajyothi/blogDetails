import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blogDetailsData, data } from './data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http:HttpClient) { }

   url="https://apis.ccbp.in/blogs"

   
  getBlogsData():Observable<data[]>{
    return this._http.get<data[]>(this.url)
  }

  getBlogsFullDetails(id: number):Observable<blogDetailsData[]>{
    return this._http.get<blogDetailsData[]>(`https://apis.ccbp.in/blogs/${id}`) 
  }
}
