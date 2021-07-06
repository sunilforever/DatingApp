import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedIn: boolean= false;
  constructor(private accountSerice:AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountSerice.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn=true;
    }, error => {
      console.log(error);
    })
  }

  logout()
  {
    this.accountSerice.logout();
    this.loggedIn=false; 
  }

  getCurrentUser()
  {
    this.accountSerice.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    }
    )
  }

}
