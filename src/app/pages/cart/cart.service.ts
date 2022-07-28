import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class CartService{
    
    cartDataList:any = [];
    productList= new BehaviorSubject<any>([]);
    item: any;

    constructor(){}

    //get product data
    getProductData(){
        return this.productList.asObservable();
    }

    //set product data
    setProduct(product:any){
        this.cartDataList.push(...product);
        this.productList.next(product);

    }

    //add to cart
    addToCart(product:any){
        this.cartDataList.push(product);
        this.productList.next(this.cartDataList);
        this.getTotalAmount();
        console.log(this.cartDataList);
        
    }

    //get total amount
    getTotalAmount(){
        // console.log(this.cartDataList);

        let grandTotal = 0;
        // return this.cartDataList.length;
        let i;
        for(i=0; i<this.cartDataList.length; i++){
            grandTotal += this.cartDataList[i].ins ;
        }
        return grandTotal;
        
    }

    //remove a cart product
    removeCartData(item:any){
        console.log(item);
        
        this.cartDataList.splice(item, 1);
    this.productList.next(this.cartDataList.slice());


        // this.cartDataList.map((a:any, index:any) => {
        //     // console.log(a.prodID);
            
        //     if(product.prodID === a.id){
        //      console.log(a.id);
                
        //         this.cartDataList.splice(index,1);
        //     }
        // })
        this.productList.next(this.cartDataList)
    }


}