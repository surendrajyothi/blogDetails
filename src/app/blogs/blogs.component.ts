import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

   products !: any[];
   copyOf = this.products
   

  constructor(private _dataService:CoursesService,private activeId:ActivatedRoute) {
	
	this.activeId.queryParamMap.subscribe((qparams) =>{
		let categoryName = qparams.get('category')
		if(categoryName){
			this.products = this.products.filter((filterData)=>{
			  return filterData.category === categoryName 
			}) 
		  }
		  else{
			return this.products
		  }
	})	
  }
  
  ngOnInit(){
    this._dataService.getBlogsData().subscribe(data => this.products = data)

	
  }

}
