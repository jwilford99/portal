import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OttPage } from './ott.page';

const routes: Routes = [
  {
    path: '',
    component: OttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OttPageRoutingModule {}
