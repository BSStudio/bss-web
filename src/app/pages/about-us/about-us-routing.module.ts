import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
