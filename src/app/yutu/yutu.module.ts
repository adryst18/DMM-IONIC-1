import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YutuPageRoutingModule } from './yutu-routing.module';

import { YutuPage } from './yutu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YutuPageRoutingModule
  ],
  declarations: [YutuPage]
})
export class YutuPageModule {}
