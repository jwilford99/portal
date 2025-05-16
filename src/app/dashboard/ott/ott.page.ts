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
  selector: 'app-ott',
  templateUrl: './ott.page.html',
  styleUrls: ['./ott.page.scss'],
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
export class OttPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
