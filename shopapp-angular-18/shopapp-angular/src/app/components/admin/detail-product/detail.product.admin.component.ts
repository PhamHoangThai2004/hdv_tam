import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminModule } from 'src/app/components/admin/admin.module';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/services/product.service';
import { ProductResponse } from 'src/app/responses/product/product.response';
import { ProductDTO } from 'src/app/dtos/product/product.dto';

@Component({
  selector: 'app-detail-product-admin',
  templateUrl: './detail.product.admin.component.html',
  styleUrls: ['./detail.product.admin.component.scss']
})

export class DetailProductAdminComponent implements OnInit{
  productId:number = 0;
  product: ProductResponse = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    thumbnail: '',
    category_id: 0,
    created_at: new Date(),
    updated_at: new Date()
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    debugger
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getDetailProduct(this.productId).subscribe({
      next: (response: any) => {
        debugger;
        console.log(response); // Kiểm tra dữ liệu trả về
        this.product.id = response.id;
        this.product.name = response.name;
        this.product.price = response.price;
        this.product.description = response.description;
        this.product.thumbnail = response.thumbnail;
        this.product.category_id = response.categoryId
        if (response.created_at) {
            this.product.created_at = new Date(response.created_at);
        }
        if (response.updated_at) {
          this.product.updated_at = new Date(response.updated_at);
        }
        debugger   
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching detail:', error);
      }
    });
  }

  updateProduct(): void {
    // this.router.navigate(['../'], { relativeTo: this.route });
    debugger
    this.productService
      .updateProduct(this.productId, new ProductDTO(this.product))
      .subscribe({
      next: (response: any) => {
        debugger
        console.log('Product updated successfully:', response)
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        // Handle the error
        debugger
        console.error('Error updating product:', error);
      }
    });
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onImageChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.product.thumbnail = e.target?.result as string; // Cập nhật URL hình ảnh
      };
      reader.readAsDataURL(fileInput.files[0]); // Đọc file và chuyển đổi sang Base64
    }
  }
  
}