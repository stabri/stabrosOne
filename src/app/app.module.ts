import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MachineryComponent } from './machinery/machinery.component';
import { ServicesComponent } from './services/services.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { MachineryItemComponent } from './machinery/machinery-item/machinery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    MachineryComponent,
    ServicesComponent,
    ContactFormComponent,
    FooterComponent,
    MachineryItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
