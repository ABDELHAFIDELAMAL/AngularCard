import { Component } from '@angular/core';
import { ProductService } from '../services/api/Product/product';
import { Product } from '../services/api/Product/product.modele';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductMangementComponent implements OnInit {
  constructor(private ProductService: ProductService) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(){
  
  }
}
