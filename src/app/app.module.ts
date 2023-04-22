import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [    
    AppComponent,    
    AtividadeComponent,
    NavComponent,    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HttpClientModule, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
