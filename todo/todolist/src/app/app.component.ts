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
  showhideDash:boolean=false;
  passtoLogin:User[]=[];
  error:boolean = false

  fnameReg:string;
  pwordReg:string;
  fnameLog:string;
  pwordLog:string;

  importBoolean(_value:boolean){ 
    this.showhidelogin = !_value;
  } 

  importStatusText(_value:string){
    this.pageStatus = _value;
  }

  userInfo(_user:any){  
    this.fnameReg =  _user.fname;
    this.pwordReg = _user.pword;
    this.pageStatus = _user.pstatus;
  }

  userLogin(_user:any){    
    this.fnameLog = _user.fname1;
    this.pwordLog = _user.pword1;

    //console.log(this.fnameReg)
    if(this.fnameLog != undefined && this.pwordLog != undefined){
      if(this.fnameLog==this.fnameReg && this.pwordLog==this.pwordReg){
        this.pageStatus = `Welcome to ${this.fnameLog} !!!`;
        this.showhideDash = true;
      }else{
        this.error = true
      }
    }else{
      this.error = true
    }
  }

  fromRegister(_boo:boolean){
    console.log('_boo', _boo);
    this.showhidelogin = _boo
  }

}
