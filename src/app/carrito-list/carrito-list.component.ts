import { Component, OnInit } from '@angular/core';
import { ToolCartService } from '../tool-cart.service';
import { tool } from '../tools-list/tool';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.scss'
})
export class CarritoListComponent implements OnInit{
  cartList$: Observable<tool[]>;

  constructor(private cart: ToolCartService){
    this.cartList$ = cart.shopList.asObservable();
  }
  ngOnInit(): void {
      
  }
}
