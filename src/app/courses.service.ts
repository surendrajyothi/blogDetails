import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { blogDetailsData, data } from './data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements CanActivate{

  constructor(private _http:HttpClient) { }

   url="https://fakestoreapi.com/products"


   
  getBlogsData():Observable<data[]>{
    return(this._http.get<data[]>(this.url))
  }


  getBlogsFullDetails(id: number):Observable<blogDetailsData[]>{
    return this._http.get<blogDetailsData[]>(`https://fakestoreapi.com/products/${id}`) 
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false
  }


}
