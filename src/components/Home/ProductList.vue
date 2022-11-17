<template>
<div class="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2">
  <div v-for="(item, index) of items" :key="'trendingproduct' + index" class="trending-product py-4 md:py-12 flex flex-wrap">
    <img :src="item.img" class="object-scale-down block mx-auto h-32 mt-4 md:mt-10" />
    <div class="py-2 md:py-4 w-full">
      <div class="w-full flex justify-center">
        <star-rating v-model:rating="item.rating" :star-size="20" :show-rating="false"></star-rating>
      </div>
      <div class="w-full text-center text-xl font-light">{{item.name}}</div>
      <div class="w-full text-center">
        <span class="text-gray-400 line-through px-2">${{item.price}}</span>
        <span class="text-lime-500 text-xl align-middle">${{item.discountedPrice}}</span>
      </div>
      <div class="w-full text-center my-4 md:my-8">
        <a 
          href="javascript:;" 
          class="p-2 bg-lime-500 hover:bg-lime-600 transition-colors duration-400 text-white" 
          @click="addToCart({ id: item.id })"
        >
          Add to cart
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'TrendingProducts',
  props: ['items'],
  components: {
    StarRating
  },
  methods: {
    addToCart ({ id }) {
      console.log('Adding item to cart, id:', id)
      this.$store.commit('increment')
      console.log(this.$store)
      console.log(this.$store.state)
    }
  }
}
</script>

<style lang="postcss" scoped>
.trending-product {
  background-color: #F6FAFB;
}
</style>