import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIShellModule } from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultShellComponent } from './default/default-shell.component';
import { VideoShellComponent } from './video/video-shell.component';

@NgModule({
  imports: [CommonModule, RouterModule, UIShellModule],
  declarations: [HeaderComponent, FooterComponent, DefaultShellComponent, VideoShellComponent],
})
export class ShellModule {}
