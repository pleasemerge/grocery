<template>
<div class="text-white mx-2 md:mx-0">
  <div class="md:flex w-full relative bg-lime-500">
    <div class="hidden md:block relative">
      <img :src="`${publicPath}/img/subscribe_form_img.png`" width="350" class="transform -translate-x-20 translate-y-5 scale-105" />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2 px-2">
      <div class="w-full flex justify-center flex-wrap">
        <h1 class="md:text-5xl w-full text-left my-4">Subscribe to newsletter</h1>
        <div class="flex items-center w-full">
          <input type="text" v-model="text" class="inline-block border p-2 my-2 w-10/12 text-gray-700" placeholder="Enter your email" />  
          <a href="javascript:;" class="inline-block bg-gray-700 p-2" @click="submit">
            <span class="opacity-90">Submit</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      text: ''
    }
  },
  methods: {
    submit () {
      if (!this.text) return
      this.showToast({ text: 'Not implemented yet' })
      this.text = ''
    },
    showToast ({ text }) {
      this.$store.dispatch('toast/show', { text })
    }
  }
}
</script>
