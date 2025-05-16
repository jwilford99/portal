import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import {OverviewPage} from "./overview/overview.page";
import {DisplayPage} from "./display/display.page";
import {VideoPage} from "./video/video.page";
import {OttPage} from "./ott/ott.page";
import {AudioPage} from "./audio/audio.page";
import {BillingPage} from "./billing/billing.page";
import {ContactPage} from "./contact/contact.page";
import {DashboardPageRoutingModule} from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    OverviewPage,
    DisplayPage,
    VideoPage,
    OttPage,
    AudioPage,
    BillingPage,
    ContactPage
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
