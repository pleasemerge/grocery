<template>
<div>
  <div class="text-center py-4 md:py-8">
    <h1 class="text-3xl">What Our Customers Saying</h1>
  </div>
  <div class="flex flex-wrap md:flex-nowrap gap-2">
    <div 
      class="w-full md:w-1/2 p-4 feedback border-t-4 border-lime-500 mx-2 md:mx-0" 
      v-for="(item, index) of feedbackItems" :key="'feedbackitem' + index"
    >
      <h1 class="block text-5xl text-lime-600">
        “
      </h1>
      <div>
        ”{{item.text}}”
      </div>
      <star-rating :rating="5" :star-size="20" :show-rating="false" :read-only="true"></star-rating>
      <div class="py-2">
        {{item.name}} <span class="text-lime-500 text-sm">{{item.position}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  data () {
    return {
      feedbackItems: [
        {
          text: 'Quisquam est, qui dolorem ipsum quia dolor sit\
            consectetur adipisci velit sed quia non numqua\
            eius modi tempora incidunt ut labore et dolore \
            magnam aliquam quaerat voluptatem repudia\
            sint et molestiae',
          name: 'Alina Parker',
          position: 'CEO, GTD'
        },
        {
          text: 'Quisquam est, qui dolorem ipsum quia dolor sit\
            consectetur adipisci velit sed quia non numqua\
            eius modi tempora incidunt ut labore et dolore \
            magnam aliquam quaerat voluptatem repudia\
            sint et molestiae',
          name: 'Kevin Andrew',
          position: 'Manager, Rex'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.feedback {
  background-color: #F6FAFB;
}
</style>