import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalNEWPageRoutingModule } from './detal-new-routing.module';

import { DetalNEWPage } from './detal-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalNEWPageRoutingModule
  ],
  declarations: [DetalNEWPage]
})
export class DetalNEWPageModule {}
