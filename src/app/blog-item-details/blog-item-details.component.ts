import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.scss']
})
export class BlogItemDetailsComponent implements OnInit {

  blogFullDetails: any;

  constructor(private _activateRoute:ActivatedRoute,private _courseDetails:CoursesService) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(params =>{
      let userId = params.get('id')
      this.getBlogData(parseInt(userId!));
      console.log(userId)
    })
    
  }

  getBlogData(id:number){
    this._courseDetails.getBlogsFullDetails(id).subscribe(courseDetails => {  
      this.blogFullDetails=courseDetails
    })
  }

}
