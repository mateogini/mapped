import { Injectable } from '@angular/core';
import { tool } from './tools-list/tool'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToolCartService {
  /* 
  manjea la logica del carrito
  */
  constructor() { }
  private _shopList: tool[] = [];
  shopList: BehaviorSubject<tool[]> = new BehaviorSubject(this._shopList);

  addToCart(tool: tool) {
   let item:tool | undefined = this._shopList.find((v1) => v1.name == tool.name)
   if(!item){
    this._shopList.push({...tool});
    console.log(this.shopList);
  }
  else{
    item.quantity += tool.quantity;
  }
  this.shopList.next(this._shopList);
  }

}
