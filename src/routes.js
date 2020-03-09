import Vue from 'vue'
import router from 'vue-router'
import home from './views/home.vue'
import products from './views/productList.vue'
import product from './views/product.vue'
import cart from './views/yourCart.vue'
Vue.use(router)



const routes = new router({
  mode: 'history',
    routes:[
        {
          path:'/',
          component:home
        },
        {
            path:'/products',
            component:products
          },
          {
            path:'/product/:id',
            component:product,
            name:"product",
            props:true
          },
          {
            path:'/cart',
            component:cart
          }
    ],
    
})
export default routes