import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultShellComponent } from './shell/default-shell.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultShellComponent,
    children: [
      {
        path: 'about-us',
        loadChildren: () => import('./pages/about-us/about-us.module').then(({ AboutUsModule }) => AboutUsModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('./pages/courses/courses.module').then(({ CoursesModule }) => CoursesModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./pages/events/events.module').then(({ EventsModule }) => EventsModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(({ HomeModule }) => HomeModule),
      },
      {
        path: 'live',
        loadChildren: () => import('./pages/live/live.module').then(({ LiveModule }) => LiveModule),
      },
      {
        path: 'video',
        loadChildren: () => import('./pages/video/video.module').then(({ VideoModule }) => VideoModule),
      },
      { path: 'v', redirectTo: '/video', pathMatch: 'prefix' }, // todo
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
