import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilliePageRoutingModule } from './billie-routing.module';

import { BilliePage } from './billie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilliePageRoutingModule
  ],
  declarations: [BilliePage]
})
export class BilliePageModule {}
