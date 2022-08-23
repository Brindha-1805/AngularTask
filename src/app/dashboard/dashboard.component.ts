import { Component, OnInit } from '@angular/core';
import {  Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 @Input() item='';
 @Output() newEvenEmitter=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log('inside the item',this.item)
    this.addNewItem()
  }
  addNewItem(){
    console.log('inside the addNewitem')
    this.newEvenEmitter.emit('child component');
  }

}
