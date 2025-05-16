import {Component, inject} from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/angular/standalone";
import {DisplaySummary} from "../../shared/fake-data/display-data";
import {PortalListComponent} from "../../../shared/portal-list/portal-list.component";

@Component({
  selector: 'app-display-summary',
  templateUrl: './display-summary.component.html',
  styleUrls: ['./display-summary.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    PortalListComponent
  ]
})
export class DisplaySummaryComponent {
  data: any = inject(DisplaySummary);

  constructor() { }

}
