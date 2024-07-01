import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { CarritoListComponent } from './carrito-list/carrito-list.component';
import { ToolsAboutComponent } from './tools-about/tools-about.component';
import { MappedToolsComponent } from './mapped-tools/mapped-tools.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolsListComponent,
    CarritoListComponent,
    ToolsAboutComponent,
    MappedToolsComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
