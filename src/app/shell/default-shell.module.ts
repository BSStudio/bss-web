import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIShellModule } from 'carbon-components-angular';
import { DefaultShellComponent } from './default-shell.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, UIShellModule],
  declarations: [DefaultShellComponent, HeaderComponent, FooterComponent],
})
export class DefaultShellModule {}
