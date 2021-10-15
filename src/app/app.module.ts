import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {NavbarComponent} from './navbar/navbar.component';
import { VicthoriaCurrencyComponent } from './victhoria-currency/victhoria-currency.component';
import { VicthoriaWalletComponent } from './victhoria-wallet/victhoria-wallet.component';

import { VicthoriaWalletService } from './victhoria-wallet.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (
      [
        {path: '', component: VicthoriaCurrencyComponent},
        {path: 'currency', component: VicthoriaCurrencyComponent},
        {path: 'wallet', component: VicthoriaWalletComponent}
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, VicthoriaCurrencyComponent, VicthoriaWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VicthoriaWalletService ]
})
export class AppModule { }
