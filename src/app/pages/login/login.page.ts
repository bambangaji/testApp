import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigateByUrl('tabs', { replaceUrl: true });
  }

  showPassword = false;
  inputPasswordType = 'password';
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputPasswordType = this.showPassword ? 'text' : 'password';
  }
}
