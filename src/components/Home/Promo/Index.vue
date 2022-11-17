<template>
<div class="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-2">
  <div class="flex w-full md:w-1/3" v-for="(item, index) of promoItems" :key="index" :style="{ backgroundColor: item.bgColor, color: item.textColor ?? '#000' }">
    <div class="w-full md:w-1/2 p-4">
      <router-link :to="{ name: 'Shop', params: { group_id: item.group_id } }">
        <span class="text-3xl block">{{item.text}}</span>
      </router-link>
    </div>
    <div class="w-full md:w-1/2 h-56" :style="{ backgroundImage: `url(${item.bgImage})` }"></div>
  </div>
</div>
</template>

<script>
const publicPath = process.env.BASE_URL
export default {
  name: 'Promo',
  data () {
    return {
      promoItems: [
        { text: 'Get Every Vegetable You Need', bgImage: `${publicPath}img/promo1.png`, bgColor: '#A0DED4', textColor: '#fff', group_id: 5 },
        { text: 'We Have Best Beverages Collection', bgImage: `${publicPath}img/promo2.png`, bgColor: '#F48214', textColor: '#fff', group_id: 1 },
        { text: 'Beauty And Health Products', bgImage: `${publicPath}img/promo3.png`, bgColor: '#9FCB22', textColor: '#fff', group_id: 10}
      ]
    }
  }
}
</script>
