import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class CarrotJuiceService {

  constructor(private http: Http) { }

  makeJuice(fruitOrVegetable: string): string {
    if (fruitOrVegetable !== 'carrot') {
      throw 'not a good source of vitamins and minerals';
    }
    return 'juice';
  }

  makeJuiceFromTheWeb(fruitOrVegetable: string): Observable<string> {
    return this.http
      .post('http://juice.info/api/carrots', { fruitOrVegetable })
      .map(response => response.json())
  }

}
