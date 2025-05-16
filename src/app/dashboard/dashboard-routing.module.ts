import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
      },
      {
        path: 'display',
        loadChildren: () => import('./display/display.module').then( m => m.DisplayPageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
      },
      {
        path: 'ott',
        loadChildren: () => import('./ott/ott.module').then( m => m.OttPageModule)
      },
      {
        path: 'audio',
        loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
      },
      {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then( m => m.BillingPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
