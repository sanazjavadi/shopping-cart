<script>
export default {
    
}
</script>
<template>
     <!--================Hero Banner Area Start =================-->
  <section class="hero-banner">
    <div class="container">
      <div class="row align-items-center text-center">
        <div class="col-md-6 col-lg-5 mb-5 mb-md-0 pr-2">
          <h1>Online Shopping</h1>
          <h2 class="mb-5"
            >Choose Your Favorite Product
          </h2>
          <router-link to="/products" class="button button-hero mt-5"> let's shop</router-link>
         
        </div >
        <div class="col-md-6 col-lg-7 col-xl-6 ">
          <div style="width:160%;">
  <img
            class="img-fluid"
            src="../assets/shopping.jpg"
            alt=""
          />
          </div>
        
        </div>
      </div>
    </div>
  </section>
  <!--================Hero Banner Area End =================-->
</template>
<style scoped>
.button{
  padding:20px 30px;
  background-color:rgb(240, 75, 136);
  border-radius:30px;
  color:white;
  text-decoration:none;
  transition: background-color .7s ease;
}
.button:hover{
  background-color: rgb(177, 33, 86);
}

/* banner section start
	============================================================================================ */
.hero-banner {
  padding-top: 120px;
}

@media (min-width: 992px) {
  .hero-banner {
    padding-top: 160px;
  }
}

.hero-banner h1 {
  text-transform: uppercase;
  color: #6059f6;
  margin-bottom: 15px;
}

@media (max-width: 1200px) {
  .hero-banner h1 {
    font-size: 40px;
  }
}

@media (max-width: 991px) {
  .hero-banner h1 {
    font-size: 30px;
  }
}
</style>