import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrgComponent } from './drg/drg.component';

const routes: Routes = [
  { path: '', component: DrgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
