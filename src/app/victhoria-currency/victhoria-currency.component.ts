import { Component, OnInit } from '@angular/core';
import { VicthoriaWalletService } from '../victhoria-wallet.service';

@Component({
  selector: 'app-victhoria-currency',
  templateUrl: './victhoria-currency.component.html',
  styleUrls: ['./victhoria-currency.component.css']
})
export class VicthoriaCurrencyComponent implements OnInit {

  constructor(public wallet: VicthoriaWalletService) { 

    
  }

  ngOnInit() {
  }

}