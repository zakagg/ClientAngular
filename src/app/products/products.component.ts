import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../../../model/product.model';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  
  constructor(private productService:ProductService,private router:Router
    ,public appStateService:AppStateService
  ) {}
  

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts(){
    // Fetch data from the server
    this.productService.searchProducts(this.appStateService.productState.keyword,this.appStateService.productState.currentPage,this.appStateService.productState.pageSize).subscribe({
      next :(resp) => {
        let products=resp.body as Product[];
        let totalProducts:number=parseInt(resp.headers.get('x-total-count')!);
        //this.appStateService.productState.totalProduct=totalProducts;
        let totalPages=Math.floor(totalProducts/this.appStateService.productState.pageSize);
        if(totalProducts%this.appStateService.productState.pageSize!=0){
          ++totalPages;
        }
       
        this.appStateService.setProductState({
          products:products,
          totalProduct:totalProducts,
          totalPages:totalPages,
          
        })
      
      },
      error :(error) => {
        console.error('Error fetching data:', error);
      }
    }
    );
  }


  handleCheckedProduct(product: Product) {
    this.productService.checkProducts(product).subscribe({
      next :updateProduct => {
        product.checked = !product.checked;
      }
    }
    )
  }
  handleDeleteProduct(product: Product) {
    if (confirm("are you sure!"))
    this.productService.deleteProduct(product).subscribe({
      next :updateProduct => {
        //this.appStateService.productState.products=this.appStateService.productState.products.filter(p=>p.id!=product.id)
        this.searchProducts();
      }
    }
    )
  }
  
  handleGoTPage(page:number) {
    
    this.appStateService.productState.currentPage=page
    this.searchProducts()
  }
  handleEditProduct(product: Product) {
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
  }
    
}
