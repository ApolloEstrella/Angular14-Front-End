import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobportalComponent } from './jobportal/jobportal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },     // Default route, maps to HomeComponent
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'jobportal', component: JobportalComponent },
  { path: 'jobportal/:id', component: JobportalComponent }
  //{ path: '**', redirectTo: '/' }             // Redirect to default route for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
