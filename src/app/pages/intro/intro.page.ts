import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
// import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {
  // @ViewChild('slides') ionSlides: IonicSlides;
	constructor(private router: Router) {}
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
	ngOnInit() {}

	next() {
		// this.slides.slideNext();
	}

	async start() {
		// await Storage.set({ key: INTRO_KEY, value: 'true' });
		// this.router.navigateByUrl('/login', { replaceUrl: true });
    this.router.navigateByUrl('tabs', { replaceUrl: true });
	}
}
