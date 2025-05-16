import {Component, OnInit} from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/angular/standalone";
import {OverviewSummary} from "../../shared/fake-data/overview-data";
import {PortalListComponent} from "../../../shared/portal-list/portal-list.component";
import {PortalCardsComponent} from "../../../shared/portal-cards/portal-cards.component";
import {ServiceCtaModalComponent} from "../../shared/service-cta-modal/service-cta-modal.component";

@Component({
  selector: 'app-overview-summary',
  templateUrl: './overview-summary.component.html',
  styleUrls: ['./overview-summary.component.scss'],
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
    PortalListComponent,
    PortalCardsComponent,
    IonIcon,
    ServiceCtaModalComponent
  ]
})
export class OverviewSummaryComponent implements OnInit {
  data: any = OverviewSummary;
  serviceData: any[] = [];
  selectedChannel: string = '';
  public alertButtons = [{
    text: 'Learn More',
    role: 'confirm',
    handler: () => {
      window.open('https://www.geniusmonkey.com');
      console.log('Learn More clicked');
    }
  }];

  protected readonly parseInt = parseInt;

  constructor() {
  }

  ngOnInit() {
    this.loadServiceData();
    this.data['attribution'] = [{...this.data.revenueDaily, ...this.data.clientConversions}];
  }

  private loadServiceData() {
    this.serviceData = [
      JSON.parse(this.data.displayData?.body)[0],
      JSON.parse(this.data.videoData?.body)[0],
      JSON.parse(this.data.ottData?.body)[0],
      JSON.parse(this.data.audioData?.body)[0],
    ]
  }

  getServiceColor(channelName: any) {
    switch (channelName) {
      case 'Display':
        return 'success';
      case 'Video':
        return 'primary';
      case 'OTT':
        return 'warning';
      case 'Audio':
        return 'tertiary';
      default:
        return 'danger';
    }
  }

  getChannelLogo(d: any) {
    switch (d.channelName) {
      case 'Display':
        return './assets/images/logos/displayservice.svg';
      case 'Video':
        return './assets/images/logos/videoservice.svg';
      case 'OTT':
        return './assets/images/logos/ottservice.svg';
      case 'Audio':
        return './assets/images/logos/oaservice.svg';
      default:
        return "";
    }
  }

  getChannelLabel(d: any) {
    if (parseInt(d.bill) === 0) {
      return `What can ${d.channelName} do for you?`;
    } else {
      return 'Results';
    }
  }
}
