import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'assets/mock/products.json'; // URL to web api

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

}
