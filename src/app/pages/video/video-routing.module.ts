import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video.component';
import { VideoSingleComponent } from './video-single.component';

const routes: Routes = [
  { path: '', component: VideoComponent },
  { path: ':videoId', component: VideoSingleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
