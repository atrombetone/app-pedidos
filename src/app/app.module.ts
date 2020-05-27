import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidoItemComponent } from './components/pedidos/pedido-item/pedido-item.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    PedidoItemComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
