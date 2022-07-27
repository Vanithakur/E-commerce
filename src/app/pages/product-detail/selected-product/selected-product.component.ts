import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedProductService } from 'src/app/services/product-detail/selectedproduct.service';
import { ProductService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  @Input() selectproduct: any;
  @Input() index: any;
  selectedproducts:any =[];
  detailData:any;
  quantity='';
  reviewsData='';
  mainImage='';
  selectedImage = false;
products: any=[];
id:any='';
selectId ='';
productId ='';
showreviews:boolean = false;
  constructor(
    private allproducts: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.products = this.allproducts.getProducts(); 
   
    this.detailData = new FormGroup({
		  'detailData' : new FormGroup({
			'qty' : new FormControl(null)
		  })});
     this.reviewsData

  }
  onSubmit() {   
    for(let product of this.products) {
      if(this.id == product.prodID){
      product.qty = this.detailData.value.detailData.qty;
      this.quantity = product.qty;
      console.log(product.qty);     
     
    }
  }
  this.router.navigate(['/cart']);
    console.log(this.id);
    
  }
  changeMainImg(image:any){
    this.selectedImage = true;
    for(let product of this.products) {
      if(this.id == product.prodID){
      this.mainImage = image;
      console.log(this.mainImage);
      
    }
  
}
  }
  reviews() {
    this.showreviews =true;
  }

}
