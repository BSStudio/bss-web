import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [CommonModule, AboutUsRoutingModule],
  declarations: [AboutUsComponent, ContactComponent, MembersComponent],
})
export class AboutUsModule {}
