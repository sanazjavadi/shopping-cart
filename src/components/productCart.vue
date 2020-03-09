<script>
import {mapActions} from 'vuex'
export default {
    props:['product']
    ,
methods:{
    ...mapActions(['addProductToCart']),
    addToCart(){
        this.addProductToCart({
            product :this.product,
            number:1
        })

    }
}
}
</script>
<template>

			<div class="product">
							<div class="product_image"><img src="../assets/flower.jpg" alt="" class="img-fluid"></div>
							<div class="product_content">
								<div class="product_info d-flex flex-row align-items-start justify-content-start">
									<div>
										<div>
											<div class="product_name">
                                                 <router-link class="product-title"  :to="{name: 'product', params: {id: product.id}}"> {{product.title}}</router-link>
                                            </div>
											
										</div>
									</div>
									<div class="ml-auto text-right">
										<div class="rating_r rating_r_4 home_item_rating">{{product.color}}</div>
										<div class="product_price text-right">$<span>{{product.price}}</span></div>
									</div>
								</div>
								<div class="product_buttons">
									<div class="text-right d-flex flex-row align-items-start justify-content-start">
										<div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center"  @click="addToCart()">
											<div><div > add to cart</div></div></div>
										</div>
									
									</div>
								</div>
							</div>
</template>
<style scoped>
.product_image{
    width: 300px;
}
.product {
    margin-bottom: 30px;
}
.product_content {
    border: solid 2px #dbdbdb;
}
.product_info {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 18px;
    padding-bottom: 10px;
    min-height: 155px;
}
.product_name {
    max-width: 175px;
}
.product_name a {
    font-size: 20px;
    line-height: 1.2;
    color: #4a4a4a;
    font-weight: 500;
}
.product_buttons > div {
    width: 100%;
    height: 100%;
}
.product_buttons > div > div:first-of-type {
    border-right: solid 1px #ededed;
}
.product_buttons > div > div {
    width: 100%;
    height: 100%;
     font-weight: 900;
    border-top: solid 1px #ededed;
    background: rgba(255,255,255,0);
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
.product_buttons > div > div:hover {
   background:#2a3547;
   color:white;
}
.product_buttons {
    width: 100%;
    height: 57px;
}

.product-title{
    text-decoration:none;
    color:black;
    font-size:16px;
   transiton:color .7s ease;
  
}
.product-title:hover{
    color:rgb(177, 33, 86);
}
</style>