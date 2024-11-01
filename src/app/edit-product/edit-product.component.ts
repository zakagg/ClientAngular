import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../model/product.model';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  productId!:number;
  productFormGroup! :FormGroup;

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private fb:FormBuilder){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productId=this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next:(product)=>{
        this.productFormGroup=this.fb.group({
          id: this.fb.control(product.id),
          name: this.fb.control(product.name,[Validators.required]),
          price: this.fb.control(product.price,[Validators.min(100)]),
          checked: this.fb.control(product.checked),
        })

      },
      error: err=>{
        console.log(err);
      }
    });
  }
  updateProduct() {
    let product:Product=this.productFormGroup.value;
    this.productService.updateProduct(product).subscribe({
      next:product=>{
        alert((JSON.stringify(product)))
      },
      error: err=>{console.log(err)}
    }

    )
    }

}
