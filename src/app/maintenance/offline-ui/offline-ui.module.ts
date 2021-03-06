import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineUiRoutingModule } from './offline-ui-routing.module';
import { OfflineUiComponent } from './offline-ui.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OfflineUiRoutingModule,
    SharedModule
  ],
  declarations: [OfflineUiComponent]
})
export class OfflineUiModule { }
