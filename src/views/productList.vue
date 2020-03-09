<script>
import productCArt from '../components/productCart'
import {mapState,mapActions} from 'vuex'
export default {
    components:{productCArt},
    mounted(){
    this.fetchProducts()
    },
    computed:{
      ...mapState(['products']),
    
    }
    ,
    methods:{
  ...mapActions(['fetchProducts'])
    }
}
</script>
<template>
<div class="d-flex justify-content-between  flex-wrap img-fluid mt-5">
   <productCArt v-for="product in products" :key="product.id"  :product="product" class="mb-4 "/>
</div>
 
</template>
<style scoped>

</style>