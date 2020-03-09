<script>
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
    computed:{
      ...mapGetters(['cartItemCount','productCartCount','totalCartPrice']),
      ...mapState(['cart'])  
    },
    methods:{
        
      ...mapActions(['removeProductFromCart','clearCArtItems']),
     clearcArtItems(){
this.clearCArtItems()
     }
    }
}
</script>
<template>
    <div>
  <label class="dropdown">

  <div class="dd-button">
  {{productCartCount}} cart
  </div>

  <input type="checkbox" class="dd-input" id="test">

  <div class="dd-menu" >
    
    <div v-for="item in cart" :key="item.id" class="p-3">
        <p>  {{item.product.title}} </p>
      <strong>     {{item.product.id}}</strong> x
         {{item.number}}
         <button href="#" class="remove mb-3" @click.prevent="removeProductFromCart(item.product)">X</button>
 

         </div>
 <div class="divider"></div>
    <div>
      <h5>{{totalCartPrice}}  total price</h5>
      
      <a class="p-3" @click="clearcArtItems()">clear all</a>
    </div>
  </div>
  
</label>
    </div>
</template>
<style scoped>

/* Dropdown */
.remove{
  width: 30px;
  height: 30px;
padding:5px;
background: #b12156;
border-radius:100%;
text-decoration: none;
font-weight: 900;
color:white;
outline: none;
border:none;
float:right;

}
.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;
  border: 2px solid rgb(0, 65, 127);
  border-radius: 15px;
  padding: 10px 30px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.dd-button:hover {
  background-color: #eeeeee;
}


.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
} 

.dd-input:checked + .dd-menu {
  display: block;
} 

.dd-menu div {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid gray;
}

.dd-menu div:hover {
  background-color: #f6f6f6;
}

.dd-menu div a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu div.divider{
  padding: 0;
  border-bottom: 1px solid #cccccc;
}
</style>