import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import {ContactComponent} from './contact/contact.component'
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/blogs',pathMatch:'full'},
  {path:'blogs',component:BlogsComponent},
  {path:'blogs/:id',component:BlogItemDetailsComponent},
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