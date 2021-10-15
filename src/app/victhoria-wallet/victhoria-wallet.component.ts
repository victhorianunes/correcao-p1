import { Component, OnInit } from '@angular/core';
import { VicthoriaWalletService } from '../victhoria-wallet.service';

@Component({
  selector: 'app-victhoria-wallet',
  templateUrl: './victhoria-wallet.component.html',
  styleUrls: ['./victhoria-wallet.component.css']
})
export class VicthoriaWalletComponent implements OnInit {

  constructor(public wallet: VicthoriaWalletService) {
    


   }

  ngOnInit() {
  }

}