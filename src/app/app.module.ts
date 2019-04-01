import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { MainComponent } from './base-layout/main/main.component';
import { SideNavigationComponent } from './base-layout/side-navigation/side-navigation.component';
import { TopnavbarComponent } from './base-layout/topnavbar/topnavbar.component';
import { FooterComponent } from './base-layout/footer/footer.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavigationComponent,
    TopnavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
