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
  passtoLogin:User[]=[];

  fnameReg:string;
  pwordReg:string;
  fnameLog:string;
  pwordLog:string;

  importBoolean(_value:boolean){ 
    this.showhidelogin = !_value;
  } 

  userInfo(_user:any){  
    this.fnameReg =  _user.fname;
    this.pwordReg = _user.pword;
  }

  userLogin(_user:any){    
    this.fnameLog = _user.fname1;
    this.pwordLog = _user.pword1;

    if(this.fnameLog==this.fnameReg && this.pwordLog==this.pwordReg){
      alert('Login Successfull')
    }else{
      alert('Login Failed')
    }
  }

  fromRegister(_boo:boolean){
    console.log('_boo', _boo);
    this.showhidelogin = _boo
  }

}
