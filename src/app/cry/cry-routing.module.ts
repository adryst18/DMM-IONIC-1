import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryPage } from './cry.page';

const routes: Routes = [
  {
    path: '',
    component: CryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryPageRoutingModule {}
