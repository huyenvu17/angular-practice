import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  {path: '', loadChildren: () => ClientModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
