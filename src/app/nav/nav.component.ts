import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  @Output() mudouvalor = new EventEmitter();

  constructor(){}
  
  ngOnInit(): void {
    
  }

  incrementa(id:number){    
    this.mudouvalor.emit(id);
  } 
   
} 