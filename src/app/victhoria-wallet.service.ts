import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface BtcRate {
  bpi: {
    USD: { 
      rate_float: number;
    };
    EUR: {
      rate_float: number;
    };
  }
}

interface BRLBtcRate {
  bpi: {
    BRL: {
      rate_float: number;
    };
  };
}

@Injectable()
export class VicthoriaWalletService {

  btcRates: Array<BtcRate> = [ ];
  BRLBtcRates: Array<BRLBtcRate> = [ ] ;

  diff : number = 0;

  bitCoins : number = 0;

  constructor(private http: HttpClient) { 

    this.updateBtcRate ();
    this.updateBRLBtcRate();
    
    setInterval ( () => {
      this.updateBtcRate ();
      this.updateBRLBtcRate();
    }, 60000);

  }  

  

  updateBtcRate () {
    this.http.get<BtcRate> ('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe((data) => {
      if(this.btcRates.length>0) {
        let length = this.btcRates.length
        this.diff = data.bpi.USD.rate_float - this.btcRates[length-1].bpi.USD.rate_float;
      }
      
      this.btcRates.push(data);
    });
  }

  updateBRLBtcRate () {
    this.http.get<BRLBtcRate>
    ('https://api.coindesk.com/v1/bpi/currentprice/BRL.json').subscribe((data) => {
      this.BRLBtcRates.push(data);
    })}


  colocar (brValue: number) {
    let length = this.BRLBtcRates.length;
    if (length>0){
      let btc = brValue / this.BRLBtcRates[length-1].bpi.BRL.rate_float;
      this.bitCoins += btc;

    }
    
  }

  tirar (brValue: number) {
    let length = this.BRLBtcRates.length;
    if (length>0){
      let btc = brValue / this.BRLBtcRates[length-1].bpi.BRL.rate_float;
      this.bitCoins -= btc;
  }
}

  getBtcInUSD (){
    let length = this.btcRates.length;
    if (length>0){
      return this.bitCoins * this.btcRates[length-1].bpi.USD.rate_float;
    }else {
      return 0;


    }

}

getBtcInEUR (){
  let length = this.btcRates.length;
  if (length>0){
    return this.bitCoins * this.btcRates[length-1].bpi.EUR.rate_float;
  }else {
    return 0;


}

}

getBtcInBRL (){
  let length = this.BRLBtcRates.length;
  if (length>0){
    return this.bitCoins * this.BRLBtcRates[length-1].bpi.BRL.rate_float;
  }else {
    return 0;


}

}

}