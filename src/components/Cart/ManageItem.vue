<template>
<div>
  <a 
    class="inline-block border-l border-t border-b px-2 py-2 w-10 text-center" 
    href="javascript:;"
    @click="removeFromCart"
  >
    — 
  </a>
  <span class="inline-block text-center border px-2 py-2 w-16">{{itemQuantity}}</span>
  <a 
    class="inline-block border-t border-r border-b px-2 py-2 w-10 text-center" 
    href="javascript:;" 
    v-if="item.stock > 0" 
    @click="addToCart"
  >
    + 
  </a>
  <a class="inline-block border-t border-r border-b px-2 py-2 text-center text-rose-700" v-else>Out of stock</a>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('cart/addToCart', { item: this.item })
    },
    removeFromCart () {
      this.$store.dispatch('cart/removeFromCart', { item: this.item })
    }
  },
  computed: {
    itemInCart () {
       return this.$store.getters['cart/itemInCart']({ item: this.item })
    },
    itemQuantity () {
      return this.$store.getters['cart/itemQuantity']({ item: this.item })
    }
  }
}
</script>
