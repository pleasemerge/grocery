<template>
<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 my-2 gap-2">
  <div class="text-center border p-8" v-for="(item, index) of feedbackItems" :key="index">
    <figure>
      <img :src="item.img" class="block mx-auto py-8" width="100" />
    </figure>
    <h1 class="text-xl pb-2">{{item.title}}</h1>
    <p class="text-gray-600">
      {{item.text}}
    </p>
  </div>
</div>
</template>

<script>
const loremIpsum = 'Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius modi incidunt'
const publicPath = process.env.BASE_URL

export default {
  data () {
    return {
      feedbackItems: [
        { img: `${publicPath}img/quality_products.png`, title: 'Quality Products', text: loremIpsum },
        { img: `${publicPath}img/online_order.png`, title: 'Online Order', text: loremIpsum },
        { img: `${publicPath}img/free_delivery.png`, title: 'Free Delivery', text: loremIpsum },
        { img: `${publicPath}img/24_7_service.png`, title: '24/7 Service', text: loremIpsum },
      ]
    }
  }
}
</script>
