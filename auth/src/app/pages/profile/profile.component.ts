import { Component } from '@angular/core';
import { IAccessData } from '../auth/models/access-data';
import { IUser } from '../auth/models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user!:IAccessData

  constructor(private authSvc:AuthService){
    this.authSvc.user$.subscribe(user => this.user = user as IAccessData)
  }
}
