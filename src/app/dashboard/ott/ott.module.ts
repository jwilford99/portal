import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OttPageRoutingModule } from './ott-routing.module';

import { OttPage } from './ott.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OttPageRoutingModule,
    OttPage
  ],
  declarations: []
})
export class OttPageModule {}
