import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  passIndex:number;
  linethrough:Array<boolean> = []; 

  @Input() passData; 
  constructor() { 
   }

  ngOnInit() {
  }

  @Output() removeList = new EventEmitter<number>();


  deleteList(index){ 
    this.removeList.emit(index)
  }

  completedTask(index){
    
    this.linethrough.push(true);
    console.log(this.linethrough[index])
  }
  

}
