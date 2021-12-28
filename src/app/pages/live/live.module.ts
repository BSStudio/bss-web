import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveRoutesModule } from './live-routes.module';
import { LiveComponent } from './live.component';

@NgModule({
  imports: [CommonModule, LiveRoutesModule],
  declarations: [LiveComponent],
})
export class LiveModule {}
