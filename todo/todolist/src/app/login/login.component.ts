import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserinfoService } from "../userinfo.service";
import { User, UserLog } from "../signup/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fname1:string;
  pword1:string;
  showhidelogin:boolean=true;
  getUser:User; 
  
  constructor(private _serv:UserinfoService) {  
  }

  ngOnInit() {
  } 

  @Output() exportBoolean = new EventEmitter<boolean>();
  @Output() userLoggedValue = new EventEmitter<UserLog>();

  showSignUpcomp(){
    this.showhidelogin = !this.showhidelogin;
    this.exportBoolean.emit(this.showhidelogin); 
  } 

  login(){
    let userLog = new UserLog();
    userLog.fname1 = this.fname1;
    userLog.pword1 = this.pword1;
    this.userLoggedValue.emit(userLog);
  }



}
