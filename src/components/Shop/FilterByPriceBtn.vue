<template>
<a href="javascript:;" class="p-2 rounded-md bg-white text-gray-800 rounded-lg border" @click="showFilterByPriceBlock">
  Price
</a>
</template>

<script>
export default {
  methods: {
    showFilterByPriceBlock () {
      this.$emit('showFilterByPriceBlock')
    }
  }
}
</script>