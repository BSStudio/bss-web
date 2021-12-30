import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { ButtonModule, CheckboxModule, DatePickerModule, SearchModule, TilesModule } from 'carbon-components-angular';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    SearchModule,
    ButtonModule,
    TilesModule,
    CheckboxModule,
    DatePickerModule,
  ],
  declarations: [VideoComponent],
})
export class VideoModule {}
