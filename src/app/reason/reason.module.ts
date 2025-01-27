import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReasonPageRoutingModule } from './reason-routing.module';

import { ReasonPage } from './reason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReasonPageRoutingModule
  ],
  declarations: [ReasonPage]
})
export class ReasonPageModule {}
