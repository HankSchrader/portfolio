import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {BayouBadNewsComponent} from './bayou-bad-news/bayou-bad-news.component';
import {DakotaDeadlockIslandComponent} from './dakota-deadlock-island/dakota-deadlock-island.component';
import {BOOKS} from './books-I-wrote';

const routes: Routes = [
  { path: 'book/bayou-of-bad-news', component: BayouBadNewsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'book/dakota-on-deadlock-island', component: DakotaDeadlockIslandComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
