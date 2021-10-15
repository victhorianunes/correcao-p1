import { Component, OnInit } from '@angular/core';
import { VicthoriaWalletService } from '../victhoria-wallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public wallet: VicthoriaWalletService) { }

  ngOnInit() {
  }

}