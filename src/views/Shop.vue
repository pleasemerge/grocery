<template>
<div>
  <app-header :bgImage="'/img/shop/shop_header_bg.png'">
    <div class="app-container -mt-16 py-16 px-2 md:px-0">
      <div class="w-full h-48 md:py-8 mt-8 flex justify-center">
        <div class="flex justify-center items-center w-full md:w-4/12 bg-white border-t-4 border-lime-400">
          <div>
            <div class="text-lime-600">
              <router-link :to="{ name: 'Home' }">Home</router-link>
              ->
              <a href="javascript:;">Shop</a>
            </div>
            <div class="text-center">
              <h1>Shop</h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </app-header>
  <div class="block md:hidden">
    <a 
      class="btn-lime-600 w-full block" 
      href="javascript:;"
      @click="toggleOptionsVisibility"
    >
      <font-awesome-icon icon="filter" class="text-xl align-middle" />
      Categories
    </a>
  </div>
  <div class="app-container flex my-1 md:my-10 gap-2">
    <div 
      class="md:block w-full md:w-3/12 transition-all duration-500 px-4"
      :class="{ 'fixed top-0 bg-gray-800 opacity-90 text-white z-10 h-screen': showOptions, 'hidden': !showOptions }"
    >
      <div class="flex flex-wrap">
        <div 
          v-for="(option, index) of productGroups" 
          :key="'filtering_opt' + index" 
          :class="{
            'p-2 bg-white border-l-4  hover:border-l-4 hover:border-lime-500 text-black my-1 shadow-md flex items-center justify-between w-full cursor-pointer': true, 
            'border-l-4 border-lime-500': filters.includes(option.id)
          }"
          @click="filterByGroupId({ group_id: option.id })"
        >
          <div class="w-8/12 p-2">{{option.name}}</div>
          <div class="w-4/12 flex justify-end md:justify-center">
            <img :src="option.img" class="object-scale-down h-12" />
          </div>
        </div>
      </div>
   
      <a 
        href="javascript:;" 
        class="btn-red-500 block w-full"
        @click="toggleOptionsVisibility({ show: false })" 
        v-if="showOptions"
      >
        Close
        <font-awesome-icon icon="times" class="text-xl align-middle" />
      </a>
    </div>
    <div class="w-full md:w-8/12 p-2 md:p-0">
      <div class="mb-4 mx-0 md:mx-2 flex gap-2">
        <div class="w-8/12 flex flex-wrap gap-2" >
          <a v-for="groupId of filters" :key="groupId" href="javascript:;"  class="bg-gray-200 p-2 text-gray-900 inline-block" @click="removeFilter({ groupId })">
            {{getGroupName({ groupId })}}
            &nbsp;x
          </a>
        </div>
        <div class="w-4/12 relative">
          <div class="text-right">
            <filter-by-price-btn @showFilterByPriceBlock="showFilterByPriceBlock = true"/>
          </div>
          <div class="absolute bg-gray-100 p-4 rounded-md z-10 top-0 right-0 w-64 h-48 border" v-if="showFilterByPriceBlock">
            <span class="text-sm text-gray-500">Price</span>
            <div class="py-2">
              <Slider v-model="filterByPrice" showTooltip="drag" :min="0" :max="mostValuableProduct" :format="format" />
            </div>
            <div class="flex justify-between items-center my-2">
              <div>
                <input type="number" min="0" :max="mostValuableProduct" class="inline-block rounded p-2 text-gray-500" v-model="filterByPrice[0]">
              </div>
              <div>
                —
              </div>
              <div>
                <input type="number" min="0" :max="mostValuableProduct" class="inline-block rounded p-2 text-gray-500" v-model="filterByPrice[1]">
              </div>
            </div>
            <div class="py-2 flex gap-2">
              <a href="javascript:;" class="p-2 rounded-md bg-gray-200 text-gray-700" @click="showFilterByPriceBlock = false">
                Close
              </a>
              <a href="javascript:;" class="p-2 rounded-md bg-gray-200 border text-gray-700" @click="resetPriceFilter()">
                Reset
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-0 md:mx-2">
        <div v-if="items && items.length === 0">
          No items found in this category
        </div>
        <transition :duration="1000">
          <product-list :items="items" class="grid-cols-2 sm:grid-cols-2 lg:grid-cols-3" />
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Slider from '@vueform/slider'
import AppHeader from '@/components/Header/Index'
import ProductList from '@/components/Products/List'
import FilterByPriceBtn from '@/components/Shop/FilterByPriceBtn'

export default {
  components: {
    AppHeader,
    ProductList,
    Slider,
    FilterByPriceBtn
  },
  data () {
    return {
      showOptions: false,
      format (value) {
        return `$${value}`
      },
      filterByPrice: [0, 9999],
      showFilterByPriceBlock: false
    }
  },
  methods: {
    toggleOptionsVisibility ({ show = false }) {
      this.showOptions = show || !this.showOptions
    },
    filterByGroupId ({ group_id }) {
      this.$store.dispatch('products/updateGroupsFilter', { group_id })
    },
    getGroupName ({ groupId }) {
      return this.productGroups.find(g => g.id === groupId ).name
    },
    resetGroupsFilter () {
      this.$store.dispatch('products/resetGroupsFilter')
    },
    removeFilter ({ groupId }) {
      this.$store.dispatch('products/updateGroupsFilter', { group_id: groupId })
    },
    resetPriceFilter () {
      this.filterByPrice[0] = 0
      this.filterByPrice[1] = this.mostValuableProduct
    }
  },
  computed: {
    items () {
      return this.$store.getters['products/filterByGroupID'].filter(item => { 
        const discountValue = (item.price / 100 * item.discount).toFixed(2)
        const discountedPrice = (parseFloat(item.price) - parseFloat(discountValue)).toFixed(2)
        return discountedPrice >= this.filterByPrice[0] && discountedPrice <= this.filterByPrice[1] 
      })
    },
    cart () {
      return this.$store.getters.cart
    },
    productGroups () {
      return this.$store.getters['products/groups']
    },
    mostValuableProduct () {
      return Math.max.apply(Math, this.$store.state.products.items.map(item => item.price))
    },
    filters () {
      return this.$store.getters['products/filters']
    }
  },
  mounted () {
    const groupId = this.$route.params?.group_id
    if (groupId) {
      this.filterByGroupId({ group_id: groupId })
    }
    this.filterByPrice[1] = this.mostValuableProduct
  },
  beforeUnmount () {
    this.resetGroupsFilter()
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>