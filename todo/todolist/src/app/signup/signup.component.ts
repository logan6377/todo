import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from "./user";
import { UserinfoService } from "../userinfo.service";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  
  fname:string;
  lname:string;
  email:string;
  pword:string;

  udetail:User[]=[];
  showhidelogin:boolean=false;

  @Output() exportUser = new EventEmitter<User>();
  @Output() exportBoolean = new EventEmitter<boolean>(); //For Hiding the Registeration screen
 

  constructor(private _serv:UserinfoService) {  
  }

  ngOnInit() {
     
  } 

  register(){
    //debugger;
    let newdata = new User();
    newdata.fname = this.fname;
    newdata.lname = this.lname;
    newdata.email = this.email;
    newdata.pword = this.pword;

    console.log(newdata);

    this.exportUser.emit(newdata); 
    this.exportBoolean.emit(this.showhidelogin);

  }
   

} 