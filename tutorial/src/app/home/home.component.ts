import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule, getLocaleExtraDayPeriodRules } from '@angular/common';
import { Products, Product } from '../types';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductService) {}

  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product, "Output")
  }

  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
      });
  }
}
