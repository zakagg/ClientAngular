import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) {}
  products: Product[] = [];
  private host:string="http://localhost:8089"
  public searchProducts(keyword:string="",page:number,size:number):Observable<HttpResponse<Product[]>>{
    return this.http.get<Array<Product>>(`${this.host}/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response',transferCache: {
      includeHeaders: ['x-total-count']
  }})
  }
  
  checkProducts(product: any):Observable<Product>{
    return this.http.patch<Product>(`${this.host}/products/${product.id}`,{checked:!product.checked})
      
  }
  
  public deleteProduct(product:Product):Observable<Product>{
    return this.http.delete<Product>(`${this.host}/products/${product.id}`);
      
  }
  
  SaveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(`${this.host}/products`,product)
  }
  
  getProductById(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.host}/products/${id}`)
  }

  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product)
  }
 
}
