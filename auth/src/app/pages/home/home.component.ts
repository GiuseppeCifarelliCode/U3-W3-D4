import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  logged!:boolean

  constructor( private authSvc:AuthService){
    this.authSvc.isLoggedIn$.subscribe(log => this.logged = log)
    this.getAll()
  }

  logout(){
    this.authSvc.logout()
  }

  getAll(){
    this.authSvc.getAll().subscribe(user => console.log(user)
    )
  }


}
