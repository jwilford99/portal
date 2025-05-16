import {Component, OnInit} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
  ]
})
export class AudioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
