<script>
import {mapState,mapActions} from 'vuex'
export default {
      props:['id']  ,
  mounted(){
      this.getProduct( this.$route.params.id)
  },
       computed:{
           ...mapState(['product'])
       },
  methods:{
 ...mapActions(['addProductToCart','getProduct']),
    addToCart(){
       addProductToCart({
              product :this.product,
            number:1
        })
    }
}
  }

</script>
<template>
<section class="product">
    <div class="container">
    <div class="row">
        <div class="col-lg-4">
        <img class=" img-fluid" src="../assets/flower.jpg">
          
        </div>
        <div class="col-lg-8">
            <h3>{{product.title}}</h3>
            <h1 class="text-center">{{product.id}} $</h1>
            <a href="#" class="button" @click="addToCart()">add to cart</a>
        </div>
    </div>
    </div>
    </section>


</template>

<style scoped>
.product{
    margin:20% auto;
    display: flex;
    
}
.button{
  padding:15px 20px;
  background-color:rgb(42, 53, 71);
  border-radius:30px;
  color:white;
  text-decoration:none;
  transition: background-color .7s ease;
   align-self: flex-end;

}
.button:hover{
  background-color:#3f4e68;
}
</style>