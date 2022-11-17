<template>
<div>
  <div v-if="!cartIsEmpty" class="flex fixed bottom-0 w-full">
    <router-link 
      class="inline-block w-full btn-lime-600" 
      :to="{ name: 'Cart' }" 
      href="javascript:;" 
      v-if="!cartIsEmpty"
    >
      <font-awesome-icon icon="cart-arrow-down" />
      My cart [{{cartItemsLength}}]
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    cartIsEmpty () {
      return this.$store.getters['cart/isEmpty']
    },
    cartItemsLength () {
      return this.$store.getters['cart/items'].length
    }
  }
}
</script>
