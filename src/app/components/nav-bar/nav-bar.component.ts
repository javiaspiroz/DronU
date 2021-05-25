import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent) child: LoginComponent;

  constructor() {}

  ngOnInit(): void {}

  showLogin() {
    this.child.showPopupLogin();
  }
}
