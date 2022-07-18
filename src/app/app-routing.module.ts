import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompaniesDirectoryComponent } from './companies-directory/companies-directory.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';
import { SeletfieldComponent } from './seletfield/seletfield.component';
import { TestDrodownComponent } from './test-drodown/test-drodown.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"comanylist",component:CompaniesDirectoryComponent},
  {path:"dropdown",component:DropdownComponent},
  {path:"about",component:AboutComponent},
  {path:"test-dropdown",component:TestDrodownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
