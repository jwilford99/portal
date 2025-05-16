import { Component, OnInit } from '@angular/core';
import {AdPreviewComponent} from "../../shared/ad-preview/ad-preview.component";
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-display-ad-preview',
  templateUrl: './display-ad-preview.component.html',
  styleUrls: ['./display-ad-preview.component.scss'],
  standalone: true,
  imports: [
    AdPreviewComponent,
    IonContent
  ]
})
export class DisplayAdPreviewComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
