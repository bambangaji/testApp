import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class CardIconComponent  {
  @Input() title?: string;
  @Input() subTitle?: string;
}
