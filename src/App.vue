<template>
  <div id="app">
   <navbar/>
   <div class="container main">
 <router-view>
   </router-view>

   </div>
  
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components:{navbar}
}
</script>

<style>
.main{
  margin-top:100px;
}
</style>
