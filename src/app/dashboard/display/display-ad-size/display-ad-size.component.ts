import { Component, OnInit } from '@angular/core';
import {AdSizeComponent} from "../../shared/ad-size/ad-size.component";
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-display-ad-size',
  templateUrl: './display-ad-size.component.html',
  styleUrls: ['./display-ad-size.component.scss'],
  standalone: true,
  imports: [
    AdSizeComponent,
    IonContent
  ]
})
export class DisplayAdSizeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
