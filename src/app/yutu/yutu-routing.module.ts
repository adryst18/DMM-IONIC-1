import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YutuPage } from './yutu.page';

const routes: Routes = [
  {
    path: '',
    component: YutuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YutuPageRoutingModule {}
