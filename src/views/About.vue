<template>
<div>
  <app-header :bgImage="`${$publicPath}img/about/about_page_header_bg.png`">
    <div class="app-container -mt-16 py-16 px-2 md:px-0">
      <div class="w-full h-48 md:py-8 mt-8 flex justify-center">
        <div class="flex justify-center items-center w-full md:w-4/12 bg-white border-t-4 border-lime-400">
          <div>
            <div class="text-lime-600">
              <router-link :to="{ name: 'Home' }">Home</router-link>
              ->
              <a href="javascript:;">About</a>
            </div>
            <div class="text-center">
              <h1 class="text-3xl">About Us</h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </app-header>
  
  <div class="app-container flex flex-wrap my-0 md:my-8">
    <div class="w-full md:w-1/2">
      <img :src="`${$publicPath}img/about/clients_1.png`" />
    </div>
    <div class="w-full md:w-1/2 xl:w-4/12 px-2 md:px-10 flex items-center">
      <div>
        <h1 class="text-3xl py-4 md:py-8">
          We Give The Lowest
          Price on Grocery Items
        </h1>
        <p>
          Neque porro quisquam est aui dolorem iesum ruia dolor 
          sit amet, consectetur, adipisci velit, sed quia non numua 
          eius modi tempora incidunt ut labore et dolore magnam 
          volutatem exercitationem ullam.
        </p>
        <p>
          Quis autem vel eum iure reprehenderit aui in ea voluptae 
          velit esse quam nihil molestiae consequatur, vel illum rui 
          dolorem eum fugiat quo voluptas excepteur deserunt 
          veniam adipisicing do adipisicing adipisicing proident 
          esse aud irure commodo mollit voluptate irure alorem 
          consequat ullamco do laboris.
        </p>
      </div>
    </div>
  </div>

  <div class="our-benefits">
    <div class="app-container flex flex-wrap md:flex-nowrap gap-x-4">
      <div class="w-full md:w-1/2 border-t-4 border-lime-500 bg-white my-4 md:my-10 p-4 md:p-8 mx-2">
        <div class="h-28 flex items-center">
          <img :src="`${$publicPath}img/about/about-us-icon1.png`"/>
        </div>
        <h1 class="text-3xl">Our Vision</h1>
        <p class="w-full md:w-8/12 py-4">
          Neque porro quisquam est aui dolorem iesum ruia 
          sit amet, consectetur, adipisci velit, sed quia non
          eius modi tempora incidunt ut labore et dolore ma
          volutatem exercitationem ullam.
        </p>
        <p>
          <router-link :to="{ name: 'Shop' }" class="bg-lime-500 text-white px-4 py-2 transition-color duration-200 hover:bg-lime-700">Shop Now</router-link>
        </p>
      </div>
      <div class="w-full md:w-1/2 border-t-4 border-lime-500 bg-white my-4 md:my-10 p-4 md:p-8 mx-2">
        <div class="h-28 flex items-center">
          <img :src="`${$publicPath}img/about/about-us-icon2.png`" />
        </div>
        <h1 class="text-3xl">Our Goal</h1>
        <p class="w-full md:w-8/12 py-4">
          Neque porro quisquam est aui dolorem iesum ruia 
          sit amet, consectetur, adipisci velit, sed quia non
          eius modi tempora incidunt ut labore et dolore ma
          volutatem exercitationem ullam.
        </p>
        <p>
         <router-link :to="{ name: 'Shop' }" class="bg-lime-500 text-white px-4 py-2 transition-color duration-200 hover:bg-lime-700">Shop Now</router-link>
        </p>
      </div>
    </div>
  </div>

  <div class="app-container">
    <our-benefits />
  </div>
  <div class="app-container">
    <app-feedback />
  </div>
</div>
</template>

<script>
import AppHeader from '@/components/Header/Index'
import OurBenefits from '@/components/OurBenefits/Index'
import AppFeedback from '@/components/Feedback/Index'

export default {
  name: 'About',
  components: {
    AppHeader,
    OurBenefits,
    AppFeedback
  }
}
</script>

<style scoped>
.our-benefits {
  background-color: #F6FAFB;
}
</style>