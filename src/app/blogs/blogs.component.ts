import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public courseData !: any[];

  constructor(private _dataService:CoursesService,private _router:Router,private activeId:ActivatedRoute) { }

  ngOnInit(){
    this._dataService.getBlogsData().subscribe(data => this.courseData = data)
  }



}
