import { Component, EventEmitter, Input, Output} from '@angular/core';
import { tool } from '../tools-list/tool'
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent{
  constructor(){
    
  }
  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output() 
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() 
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity() : void{
    if(this.quantity<this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
  else{
    this.maxReached.emit("Se alcanzon el max");
  }
  }
  downQuantity()  : void{
   if (this.quantity>0){
    this.quantity--;
    this.quantityChange.emit(this.quantity);
   }
  
  }
}
