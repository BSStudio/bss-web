import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSingleRoutingModule } from './video-single-routing.module';
import { VideoSingleComponent } from './video-single.component';

@NgModule({
  imports: [CommonModule, VideoSingleRoutingModule],
  declarations: [VideoSingleComponent],
})
export class VideoSingleModule {}
