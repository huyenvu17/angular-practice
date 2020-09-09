import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientRoutingModule } from './client-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ClientComponent, HomeComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
})
export class ClientModule { }
