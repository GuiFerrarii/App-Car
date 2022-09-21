import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetathesServicosPageRoutingModule } from './detathes-servicos-routing.module';

import { DetathesServicosPage } from './detathes-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetathesServicosPageRoutingModule
  ],
  declarations: [DetathesServicosPage]
})
export class DetathesServicosPageModule {}
