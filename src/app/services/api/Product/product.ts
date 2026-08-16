import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.modele';





@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://http://localhost:8080/api/v1/products'; 
  private http = inject(HttpClient);



  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<Product>(`${this.apiUrl}/add`, product);
  }

  updateProduct(product: Product): void {
    this.http.put(`${this.apiUrl}/${product.id}`, product).subscribe();
  }
  deleteProduct(productId: number): void {
    this.http.delete(`${this.apiUrl}/${productId}`).subscribe();
  }
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }


}




