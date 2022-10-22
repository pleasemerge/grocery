<template>
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
</template>

<script>
export default {}
</script>