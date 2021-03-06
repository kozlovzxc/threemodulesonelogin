import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './components/third/third.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdRoutingModule,
  ],
  declarations: [ThirdComponent],
})
export class ThirdModule { }
