import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public loggedIn = false;
  user: any;
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    if (this.loginService.isAuthenticated()) {
      this.loggedIn = this.loginService.isAuthenticated();
      if (this.loggedIn) {
        this.getUserName();
      }
    }
  }

  logoutUser() {
      this.loginService.logout();
  }
  getUserName() {
    this.user = this.loginService.getUser();
  }

}
