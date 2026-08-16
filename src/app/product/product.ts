import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/api/Product/product';
import { Product } from '../services/api/Product/product.modele';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , FormsModule ],
  templateUrl: './product.html'
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3) , Validators.maxLength(50)]],
      description: ['', [Validators.required , Validators.minLength(3) , Validators.maxLength(200)]],
      price: [null, [Validators.required, Validators.min(0.0001)]],
      brand: ['', [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.productService.addProduct(this.productForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = 'Failed to add product.';
        console.error(err);
      }
    });
  }
}