import {AfterViewInit, Component, inject, Signal, viewChild} from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";
import {OverviewSummaryComponent} from "./overview-summary/overview-summary.component";
import {OverviewReportsComponent} from "./overview-reports/overview-reports.component";
import {OverviewAudienceComponent} from "./overview-audience/overview-audience.component";
import {OverviewDemographicsComponent} from "./overview-demographics/overview-demographics.component";
import {OverviewAttributionComponent} from "./overview-attribution/overview-attribution.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonTab,
    OverviewSummaryComponent,
    OverviewReportsComponent,
    OverviewAudienceComponent,
    OverviewDemographicsComponent,
    OverviewAttributionComponent
  ]
})
export class OverviewPage implements AfterViewInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  tab: Signal<IonTabs | undefined> = viewChild('tab');

  constructor() {
  }

  ngAfterViewInit() {
    let param = this.route.snapshot.queryParams['t'];
    param && this.tab()?.select(param);
  }

  onTabSelect(tabs: IonTabBar) {
    this.router.navigate(['.'], {queryParams: {t: tabs.selectedTab}});
  }
}
