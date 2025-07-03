import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // adjust path as needed
// import other components...

const routes: Routes = [
  { path: '', component: HomeComponent }, // 👈 Home is now the root
  // optionally: wildcard route for 404
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }