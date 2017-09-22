import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  statusText:string;
  pstatus:string = "Registration"; 
  loginFailed:string = "Login Failed!!! Please check Username or Password";

  @Input() showerror; 
  
  constructor(private _serv:UserinfoService) {  
  }

  ngOnInit() {
  } 

  @Output() exportBoolean = new EventEmitter<boolean>();
  @Output() exportstatusText = new EventEmitter<string>();
  @Output() userLoggedValue = new EventEmitter<UserLog>();

  showSignUpcomp(){
    this.showhidelogin = !this.showhidelogin;
    this.exportBoolean.emit(this.showhidelogin); 
    this.exportstatusText.emit(this.pstatus)
  } 

  login(){
    let userLog = new UserLog();
    userLog.fname1 = this.fname1;
    userLog.pword1 = this.pword1;
    this.userLoggedValue.emit(userLog);
  }



}
