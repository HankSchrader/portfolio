import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMePanelComponent } from './about-me-panel/about-me-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { MenuDashboardComponent } from './header/menu-dashboard/menu-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BayouBadNewsComponent } from './my-books/bayou-bad-news/bayou-bad-news.component';
import { DakotaDeadlockIslandComponent } from './my-books/dakota-deadlock-island/dakota-deadlock-island.component';
import { SignupSheetComponent } from './signup-sheet/signup-sheet.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TopFiveFavoriteBooksComponent } from './five-favorite-books/top-five-favorite-books/top-five-favorite-books.component';
import {CustomErrorService} from './custom-error.service';
import {FlexModule} from '@angular/flex-layout';
import { FavoriteBookListComponent } from './five-favorite-books/favorite-book-list/favorite-book-list.component';
import { StepperSignupComponent } from './signup-sheet/stepper-signup/stepper-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePanelComponent,
    MenuDashboardComponent,
    HeaderComponent,
    BayouBadNewsComponent,
    DakotaDeadlockIslandComponent,
    SignupSheetComponent,
    TopFiveFavoriteBooksComponent,
    FavoriteBookListComponent,
    StepperSignupComponent,
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
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    FlexModule,
    MatStepperModule
  ],

  providers: [CustomErrorService,
    {provide: ErrorHandler, useClass: CustomErrorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
