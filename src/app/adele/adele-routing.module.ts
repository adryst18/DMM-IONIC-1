import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdelePage } from './adele.page';

const routes: Routes = [
  {
    path: '',
    component: AdelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdelePageRoutingModule {}
