import { Injectable } from '@angular/core';
import { Product } from '../../../model/product.model';
import { ProductState } from '../../../model/productState.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() {
    
    
   }

  public productState:ProductState={
  products: [],
  keyword: "",
  totalPages:0,
  pageSize:2,
  currentPage:1,
  totalProduct:0,
  status:1,
  errorMessage:""
  }
  public _authState: any = {
    isAuthentificated: false,
    username: undefined,
    roles: undefined,
    token: undefined
  };
  public get authState(): any {
    return this._authState;
  }
  public set authState(state: any) {
    this._authState = {...this._authState,...state};

  }
  
  public setAuthState(state: any) {
    this._authState = {...this._authState,...state};

  }
  
  public  setProductState(state:any):ProductState{
    return this.productState={...this.productState,...state}
  }
  public getProductState():ProductState{
    return  this.productState;
  }


}
