import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  constructor(private fb:FormBuilder,private productService:ProductService){}


  public productFrom!:FormGroup;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productFrom=this.fb.group({
      name: this.fb.control('',[Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false)

    })
  }
  SaveProduct(){
    let product=this.productFrom.value;
    this.productService.SaveProduct(product).subscribe({
      next:data=>{
        alert(JSON.stringify(data))

      },
      error:err=>{
        console.log("error")
      }
    
  }
);

  }

}
