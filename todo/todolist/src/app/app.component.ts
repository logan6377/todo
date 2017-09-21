import { Component, Output, EventEmitter } from '@angular/core';
import { User, UserLog } from "./signup/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageStatus:string="Welcome to Todo task App !!!"; 
  showhidelogin:boolean=false;
  passtoLogin:User[];

  fnameReg:string;
  pwordReg:string;
  fnameLog:string;
  pwordLog:string;

  importBoolean(_value:boolean){ 
    this.showhidelogin = !_value;
  } 

  userInfo(_user:User[]){  
    //this.fnameReg = _user
    console.log('aa', this.passtoLogin);
    console.log('SignUpdata', this.passtoLogin);
  }

  userLogin(_user:UserLog[]){
    console.log('LoginData', _user);

    console.log('pass',this.passtoLogin)
  }





  fromRegister(_boo:boolean){
    console.log('_boo', _boo);
    this.showhidelogin = _boo
  }

}
