import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentDate:any;
  currentday:string;
  days:string[]=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  months = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
  currentMonth:any;
  taskcomplete:boolean = false;
  taskCount:number = 0;

  todosData:string = ""
  todos:string[]=[];

  constructor() { 
      this.currentDate = new Date();
      this.currentday = `${this.days[this.currentDate.getDay()-1]}, ${this.currentDate.getDate()}`;
      this.currentMonth = `${this.months[this.currentDate.getMonth()-1]}`;
  }

  ngOnInit() {
  }

  @Output() todoList = new EventEmitter<string[]>();

  addToDoList(){
    this.todos.push(this.todosData);
    this.todosData = '';
    console.log(this.todos);
    this.todoList.emit(this.todos);
    this.taskCount = this.todos.length;
  }

  removeTodo(_index:number){
    console.log('remove', _index)
    this.todos.splice(_index,1);
    this.taskCount = this.todos.length;
  }
}
