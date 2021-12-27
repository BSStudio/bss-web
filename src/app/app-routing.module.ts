import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultShellComponent} from "./shell/default-shell.component";

const routes: Routes = [
  {
    path: '', component: DefaultShellComponent, children: [
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'videos', loadChildren: () => import('./videos/videos.module').then((m) => m.VideosModule) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
