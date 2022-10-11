import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextGenComponent } from './text-gen/text-gen.component';
import { TextGensComponent } from './text-gens/text-gens.component';

@NgModule({
  declarations: [
    AppComponent,
    TextGenComponent,
    TextGensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
