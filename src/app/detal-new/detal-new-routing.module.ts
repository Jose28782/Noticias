import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalNEWPage } from './detal-new.page';

const routes: Routes = [
  {
    path: '',
    component: DetalNEWPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalNEWPageRoutingModule {}
