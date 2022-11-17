import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: string = "menu";
  content: string = "content";
  menubtn: string = "menubtn";
  // menu: string = "menu_active"
  expand() {
    if (this.menu === "menu") {
      this.menu = "menu-active"
    } else {
      this.menu = "menu"
    }

    if (this.content === "content") {
      this.content = "content_active"
    } else {
      this.content = "content"
    }

    if (this.menubtn === "menubtn") {
      this.menubtn = "menubtn_active"
    } else {
      this.menubtn = "menubtn"
    }
  }


  // уберем
  name: string = '';
  email: string = '';
  password: string = '';

  test(): void {
    console.log(this.name)
  }
  normal(): void {
    let user_obj: object = {
      name: this.name,
      email: this.email,
      password: this.password,
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str)
  }
  // уберем


}