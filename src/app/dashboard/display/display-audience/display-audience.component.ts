import {Component, OnInit} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-display-audience',
  templateUrl: './display-audience.component.html',
  styleUrls: ['./display-audience.component.scss'],
  standalone: true,
  imports: [
    IonContent
  ]
})
export class DisplayAudienceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
