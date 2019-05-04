import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMePanelComponent } from './about-me-panel/about-me-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BayouBadNewsComponent } from './my-books/bayou-bad-news/bayou-bad-news.component';
import { DakotaDeadlockIslandComponent } from './my-books/dakota-deadlock-island/dakota-deadlock-island.component';
import { SignupSheetComponent } from './signup-sheet/signup-sheet.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EyesOfTheDragonComponent } from './five-favorite-books/eyes-of-the-dragon/eyes-of-the-dragon.component';
import {CustomErrorService} from './custom-error.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePanelComponent,
    MenuDashboardComponent,
    HeaderComponent,
    BayouBadNewsComponent,
    DakotaDeadlockIslandComponent,
    SignupSheetComponent,
    EyesOfTheDragonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule
  ],

  providers: [CustomErrorService,
    {provide: ErrorHandler, useClass: CustomErrorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
