import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilliePage } from './billie.page';

const routes: Routes = [
  {
    path: '',
    component: BilliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilliePageRoutingModule {}
