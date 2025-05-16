import {Component, inject} from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent} from "@ionic/angular/standalone";
import {OverviewAttributionTest} from "../../shared/fake-data/overview-data";
import {PortalTableComponent} from "../../../shared/portal-table/portal-table.component";

@Component({
  selector: 'app-overview-attribution',
  templateUrl: './overview-attribution.component.html',
  styleUrls: ['./overview-attribution.component.scss'],
  standalone: true,
    imports: [
        IonContent,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        PortalTableComponent
    ]
})
export class OverviewAttributionComponent {
  data: any = OverviewAttributionTest;

  constructor() { }

}
