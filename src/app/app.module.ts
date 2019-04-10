import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMePanelComponent } from './about-me-panel/about-me-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BayouBadNewsComponent } from './bayou-bad-news/bayou-bad-news.component';
import { DakotaDeadlockIslandComponent } from './dakota-deadlock-island/dakota-deadlock-island.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePanelComponent,
    MenuDashboardComponent,
    HeaderComponent,
    FooterComponent,
    BayouBadNewsComponent,
    DakotaDeadlockIslandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
