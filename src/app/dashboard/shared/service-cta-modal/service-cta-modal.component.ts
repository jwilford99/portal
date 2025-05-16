import {Component, effect, input, InputSignal, signal} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonModal,
  IonToolbar
} from "@ionic/angular/standalone";
import {OverlayEventDetail} from "@ionic/core/components";

@Component({
  selector: 'app-service-cta-modal',
  templateUrl: './service-cta-modal.component.html',
  styleUrls: ['./service-cta-modal.component.scss'],
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonModal,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class ServiceCtaModalComponent {
  selectedChannel: InputSignal<string | undefined> = input();
  title = signal<string | undefined>('');
  subTitle1 = signal<string | undefined>('');
  subTitle2 = signal<string | undefined>('');
  gmCost = signal<string | undefined>('');
  gmCost2 = signal<string | undefined>('');
  industryCost = signal<string | undefined>('');
  industryCost2 = signal<string | undefined>('');

  constructor() {
    effect(() => this.handleContent())
  }

  onCancel(modal: IonModal) {
    modal.dismiss(null, 'cancel');
  }

  onConfirm(modal: IonModal) {
    modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      window.open(`https://www.geniusmonkey.com/optimize-services/${this.selectedChannel()?.toLowerCase()}/`);
    }
  }

  private handleContent() {
    switch (this.selectedChannel()?.toLowerCase()) {
      case 'ott':
        this.title.set('OTT+CTV');
        this.subTitle1.set('Average CPM');
        this.subTitle2.set('Average CPConversion');
        this.gmCost.set('$39 - $55');
        this.gmCost2.set('$38*');
        this.industryCost.set('$50 - $80');
        this.industryCost2.set('Not Tracked');
        break;
      case 'display':
        this.title.set('OTT+CTV');
        this.subTitle1.set('Average CPC');
        this.subTitle2.set('Average CPConversion');
        this.gmCost.set('$0.60 - $1.09');
        this.gmCost2.set('$6.45*');
        this.industryCost.set('$1.05 - $2.20');
        this.industryCost2.set('$90.80');
        break;
      case 'video':
        this.title.set('Video');
        this.subTitle1.set('Average CPC');
        this.subTitle2.set('Average CPConversion');
        this.gmCost.set('$0.70 - $1.60');
        this.gmCost2.set('$10.03*');
        this.industryCost.set('$2.00 - $5.00');
        this.industryCost2.set('$42');
        break;
      case 'audio':
        this.title.set('Audio');
        this.subTitle1.set('Average CPM');
        this.subTitle2.set('Average CPConversion');
        this.gmCost.set('$21 - $37');
        this.gmCost2.set('$16.70');
        this.industryCost.set('$38 - $50');
        this.industryCost2.set('Not Tracked');
        break;
    }
  }
}
