import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Products } from '../types';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products : Products) => {
        console.log(products.items);
      });
  }
}
