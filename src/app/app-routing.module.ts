import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import {ContactComponent} from './contact/contact.component'
import { CoursesService } from './courses.service';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:BlogsComponent},
  {path:'product/:id',component:BlogItemDetailsComponent,canActivate:[CoursesService]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:"**" ,component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const myRoutings =[AboutComponent,ContactComponent,NotfoundComponent,BlogsComponent,BlogItemDetailsComponent]