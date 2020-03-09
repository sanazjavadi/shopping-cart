import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios';

Vue.use(Vuex);


const Store = new Vuex.Store({
state:{
    products:[],
    product:null,
    cart:[],
    recentproducts:[]
},
mutations:{
    SET_PRODUCTS(state,products){
     state.products = products
    },
    SET_PRODUCT(state,product){
       state.product = product
    },
    ADD_TO_CART(state,{product,number}){
        let productInCart = state.cart.find(item =>{
            return item.product.id === product.id
        })
        if(productInCart){
            productInCart.number += number
            return
        }
       state.cart.push({product,number})
    },
    REMOVE_PRODUCT_FROM_CART(state,product){
        state.cart = state.cart.filter(item =>{
            return item.product.id !== product.id
        })
    },
 
    
},
actions:{
    fetchProducts({commit}){
        Axios.get('https://my-json-server.typicode.com/AnifaMd/shopping-cart/products')
        .then(res =>{
            console.log(res.data)
            commit('SET_PRODUCTS', res.data)
        })
        .catch(err=>{
            console.log(err.log)
        })
    },
    getProduct({commit},productId){
        Axios.get(`https://my-json-server.typicode.com/AnifaMd/shopping-cart/products/${productId}`)
        .then(res =>{
            commit('SET_PRODUCT',res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },
    addProductToCart({commit},{product , number}){
   commit('ADD_TO_CART',{product,number})
    },
    removeProductFromCart({commit}, product){
     commit('REMOVE_PRODUCT_FROM_CART', product)
    },  
},
getters:{
    productCartCount(state){
   return state.cart.length
    },
    totalCartPrice(state){
        let total = 0;
        state.cart.forEach(item =>{
            total =item.product.price * item.number
        })
        return total
    },
   
},

})



export default Store