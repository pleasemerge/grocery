<template>
<div>
  <app-header :bgImage="'/img/shop/shop_header_bg.png'">
    <div class="app-container -mt-16 py-16 px-2 md:px-0">
      <div class="w-full h-48 md:py-8 mt-8 flex justify-center">
        <div class="flex justify-center items-center w-full md:w-4/12 bg-white border-t-4 border-lime-400">
          <div class="text-center">
            <div class="text-lime-600">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </div>
            <div class="text-center">
              <h1>Product Details</h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </app-header>

  <div class="app-container mb-2 mt-4 md:mt-8 mx-2 md:mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full md:w-4/12">
        <figure class="flex justify-center">
          <img :src="item.img" />
        </figure>
      </div>
      <div class="w-full md:w-8/12">
        <h1>{{item.name}}</h1>
        <div>
          <product-country :country="item.country" />
        </div>
        
        <div class="w-full flex items-center gap-2">
          <product-price :price="item.price" :discount="item.discount" />
        </div>

        <div class="flex items-center gap-2 w-full mb-2 mt-4 h-10">
          <template v-if="item.stock > 0">
            <a 
              href="javascript:;" 
              class="px-4 transition-all duration-100 btn-lime-600 text-xl rounded" 
              @click="addToCart({ item })" 
              v-if="item.stock > 0"
            >
              +</a>
          </template>

          <template v-if="itemInCart({ item })">
            <a 
              href="javascript:;" 
              class="px-4 py-2 transition-all duration-100 border text-xl rounded"
              @click="removeFromCart({ item })" 
            >-</a>
          </template>

          <a v-if="item.stock === 0" href="javascript:;" class="px-2 text-rose-600">Out of stock</a>
          
        </div>
        <div class="py-4">
          <h3>Overview</h3>
          <p class="py-2 text-gray-800">
            Neque porro quisquam est aui dolorem iesum ruia do
            sit amet, consectetur, adipisci velit, sed quia non num
            eius modi tempora incidunt ut labore et dolore magna
            volutatem exercitationem ullam
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-2 app-container">
    <h2>Description</h2>
    <p class="py-2 text-gray-800">
      Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
      veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      <br/>
      Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt 
      porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
  </div>

  <div class="app-container">
    <div class="p-2">
      <h2 class="py-2">Related products</h2>
      <product-list :items="relatedProducts" class="grid-cols-2 md:grid-cols-3 lx:grid-cols-4" />
      <span v-if="relatedProducts.length === 0">No related items found</span>
    </div>
  </div>
  <div class="app-container">
    <the-feedback />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/Header/Index'
import ProductList from '@/components/Products/List'
import TheFeedback from '@/components/Feedback/Index'
import StarRating from 'vue-star-rating'
import ManageCartItem from '@/components/Cart/ManageItem'
import ProductCountry from '@/components/Product/Country'
import ProductPrice from '@/components/Product/Price'

export default {
  components: {
    AppHeader,
    StarRating,
    ProductList,
    TheFeedback,
    ManageCartItem,
    ProductCountry,
    ProductPrice
  },
  data () {
    return {
      relatedProductsLimit: 4
    }
  },
  methods: {
    addToCart ({ item }) {
      this.$store.dispatch('cart/addToCart', { item })
    },
    removeFromCart ({ item }) {
      this.$store.dispatch('cart/removeFromCart', { item })
    }
  },
  computed: {
    products () {
      return this.$store.getters['products/items']
    },
    relatedProducts () {
      return this.products.filter(p => { return p.name !== this.item.name && p.group_id === this.item.group_id }).slice(0, this.relatedProductsLimit)
    },
    item () {
      const productName = this.$route.params?.name
      const i = this.products.find(p => { return p.name === productName })
      if (!i) return this.$router.push({ name: 'Home' })
      return i
    },
    ...mapGetters({
      'itemInCart': 'cart/itemInCart'
    })
  }
}
</script>
