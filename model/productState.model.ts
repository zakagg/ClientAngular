import { Product } from "./product.model";

export interface ProductState {

    products: Product[]; // Assuming you have a Product model defined elsewhere
    keyword: string;
    totalPages: number;
    pageSize: number;
    currentPage: number;
    totalProduct:number,
    status:number,
    errorMessage:string
  }
  