import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  public results: { title: string }[] = new Array(100).map((_, index) => ({ title: `Title ${index}` }));
}
