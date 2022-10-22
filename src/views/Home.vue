<template>
<div>
  <app-header :bgImage="'/img/header_bg.png'">
    <div class="app-container -mt-16 py-16 px-2 md:px-0">
      <div class="w-full md:w-1/2 py-2 md:py-8">
        <span class="block w-full text-lime-600 opacity-70">
          Welcome to our grocery store
        </span>
        <h1 class="text-5xl py-2 md:py-3">
          Shop Online For <br/>
          Fresh Groceries
        </h1>
        <div class="opacity-70 pt-2 pb-4">
          Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. 
        </div>
        <div>
          <router-link 
            :to="{ name: 'Shop' }"
            class="btn-lime-500 px-4 inline-block rounded-md"
          >
            Shop Now
          </router-link>
          
          <router-link 
            :to="{ name: 'About' }"
            class="btn-lime-600 px-4 inline-block mx-2 rounded-md"
          >
            Read more
          </router-link>
        </div>
      </div>
    </div>
  </app-header>
  <div class="app-container my-0 md:my-8">
    <home-promo />
  </div>
  <div class="bg-gray-50">
    <div class="app-container py-2 md:py-4">
      <div class="w-full text-center">
        <h1 class="pt-4 pb-10">Trending Products</h1>
      </div>
      <product-list :items="trendingProducts" :columns="3" class="grid-cols-2 md:grid-cols-4" />
    </div>
  </div>
  <div>
    <about-us />
  </div>
  <div class="app-container p-4 md:p-8">
    <our-benefits />
  </div>
  <div class="bg-gray-50">
    <div class="app-container py-8">
      <div class="w-full text-center">
        <h1 class="p-4">Featured products</h1>
      </div>
      <product-list :items="featuredProducts" class="grid-cols-1 md:grid-cols-5" />
    </div>
  </div>
  <div class="app-container my-2">
    <the-feedback />
  </div>
  <div class="app-container my-2">
    <subscribe-form />
  </div>
</div>
</template>

<script>
import AppHeader from '@/components/Header/Index'
import HomePromo from '@/components/Home/Promo/Index'
import ProductList from '@/components/Products/List'
import AboutUs from '@/components/Home/AboutUs'
import OurBenefits from '@/components/OurBenefits/Index'
import TheFeedback from '@/components/Feedback/Index'
import SubscribeForm from '@/components/Home/SubscribeForm'

export default {
  name: 'Home',
  components: {
    AppHeader,
    HomePromo,
    ProductList,
    AboutUs,
    OurBenefits,
    TheFeedback,
    SubscribeForm
  },
  computed: {
    trendingProducts () {
      return this.$store.getters['products/trending']
    },
    featuredProducts () {
      return this.$store.getters['products/featured']
    }
  }
}
</script>
