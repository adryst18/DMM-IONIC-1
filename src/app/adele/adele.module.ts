import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdelePageRoutingModule } from './adele-routing.module';

import { AdelePage } from './adele.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdelePageRoutingModule
  ],
  declarations: [AdelePage]
})
export class AdelePageModule {}
