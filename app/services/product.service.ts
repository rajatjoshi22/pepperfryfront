import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) {
   }

   getProducts(){
     let _url="http://localhost:8075/pepper-api/products";
     return this._httpClient.get<any>(_url);
   }
}
