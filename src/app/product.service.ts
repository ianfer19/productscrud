import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})

export class ProductService {
  private apiServeUrl= environment.apiBaseUrl;

  constructor( private http: HttpClient) { }

  public getProducts (): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/product/all`)
  }

  public updateProducts(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiServeUrl}/product/update`,product)
  }

  public addProducts(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiServeUrl}/product/add`,product)
  }

  public deleteProducts(productId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/product/delete`)
  }
}
