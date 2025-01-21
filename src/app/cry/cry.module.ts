import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryPageRoutingModule } from './cry-routing.module';

import { CryPage } from './cry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryPageRoutingModule
  ],
  declarations: [CryPage]
})
export class CryPageModule {}
