import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-item-list',
  templateUrl: './custom-item-list.component.html',
  styleUrls: ['./custom-item-list.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CustomItemListComponent  {
  @Input() callback?: Function;
  @Input() title?: string;
  @Input() iconStart?: string  | null = 'lock-closed';
  @Input() iconEnd?: string | null = 'chevron-forward-outline';
}
