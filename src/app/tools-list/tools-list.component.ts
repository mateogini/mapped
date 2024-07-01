import { Component } from '@angular/core';
import { tool } from './tool'
import { ToolCartService } from '../tool-cart.service';
import { ToolDataService } from '../tool-data.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.scss'
})
export class ToolsListComponent {
  constructor( private cart: ToolCartService, private toolsDataService: ToolDataService){
  }
  tools: tool[] = [];

  ngOnInit(): void {
    this.toolsDataService.getAll()
    .subscribe(tools => this.tools = tools);
    
  }

addToCart(tool: tool): void{
  this.cart.addToCart(tool);
  tool.stock -= tool.quantity;
  tool.quantity = 0;
}

maxReached(m : string){
  alert (m);
}



}
