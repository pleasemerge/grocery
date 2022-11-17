<template>
<div class="grid grid-rows-1 m-2 md:m-0 gap-1 md:gap-2">

  <div v-for="(item, index) of items" :key="index" class="relative group pt-4 shadow-md bg-white rounded-md transition-all duration-500">
    <div class="absolute top-0 left-0 rounded-md bg-rose-500 text-white px-4 py-1" v-if="item.hot">hot</div>
    <figure class="w-full h-32">
      <router-link :to="{ name: 'ShowProduct', params: { name: item.name } }">
        <product-image :imgSrc="item.img" />
      </router-link>
    </figure>
    <div class="w-full md:w-8/12 md:mx-auto px-2 md:px-0">
      <div class="w-full flex items-center gap-2">
        <product-price :price="item.price" :discount="item.discount" />
      </div>
      <div class="w-full mt-4 line-clamp-2">
        <h4 class="text-lg">
          <product-name :name="item.name" />
        </h4>
      </div>
      <div class="w-full">
        <product-country :country="item.country" />
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
    </div>
  </div>
</div>
</template>

<script>
import ProductImage from '@/components/Product/Image'
import ProductName from '@/components/Product/Name'
import ProductCountry from '@/components/Product/Country'
import ProductPrice from '@/components/Product/Price'
import { mapGetters } from 'vuex'

export default {
  name: 'ProcuctList',
  props: {
    items: {
      type: Array,
      required: false
    }
  },
  components: {
    ProductImage,
    ProductName,
    ProductCountry,
    ProductPrice
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
    ...mapGetters({
      'itemInCart': 'cart/itemInCart'
    })
  }
}
</script>

<style lang="postcss" scoped>
.trending-product {
  background-color: #F6FAFB;
}
</style>
