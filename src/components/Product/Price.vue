<template>
<div class="text-2xl text-center font-bold relative">
  ${{discountedPrice}}
  <div class="absolute w-full h-2 bg-lime-600 bottom-1 left-0 opacity-30" />
</div>
<span class="text-gray-400 text-xl px-2 line-through" v-if="discount && discount > 0">${{price}}</span>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    discountValue () {
      if (!this.discount) return this.price.toFixed(2)
      return (this.price / 100 * this.discount).toFixed(2)
    },
    discountedPrice () {
      if (!this.discount) return this.price.toFixed(2)
      return (parseFloat(this.price) - parseFloat(this.discountValue)).toFixed(2)
    }
  }
}
</script>
