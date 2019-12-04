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
import { ServiceItemComponent } from './services/service-item/service-item.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    MachineryComponent,
    ServicesComponent,
    ContactFormComponent,
    FooterComponent,
    MachineryItemComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDurDIGI3rko8ilVVtQrN7fPA8NI5SVpFg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
