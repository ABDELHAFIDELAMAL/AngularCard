import { Component, inject, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api/api'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-api',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './first-api.html',
  styleUrl: './first-api.css',
})
export class FirstAPI implements OnInit {
  private apiService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef); 
 products: any[] = [];

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (res: any) => {
        console.log("PRODUCTS JABTA MN SPRING:", res);
        this.products = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}