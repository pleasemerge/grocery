<template>
<div class="flex flex-wrap h-128 px-2 md:px-0" :style="{ backgroundImage: `url('${$publicPath}img/about_us_bg.png')` }">
  <div class="w-full md:w-1/2"></div>
  <div class="w-full md:w-1/2">
    <div class="w-full md:w-1/2 p-4 my-12 bg-white border-t-4 border-lime-500">
      <span class="block text-lime-600">About us</span>
      <h1 class="text-xl">We Provide You The <br/> Best Experience</h1>
      <div class="opacity-80 py-4">
        Neque porro quisquam est aui dolorem iesum ruia dolor 
        sit amet, consectetur, adipisci velit, sed quia non numua 
        eius modi tempora incidunt ut labore et dolore magnam 
        volutatem exercitationem ullam.
        Quis autem vel eum iure reprehenderit aui in ea voluptae 
        velit esse quam nihil molestiae consequatur, vel illum rui 
        dolorem eum fugiat quo voluptas.
      </div>
      <div>
        <router-link :to="{ name: 'About' }" class="inline-block my-4 bg-lime-500 text-white px-4 py-2 rounded-md ">Read More</router-link>
      </div>
    </div>
  </div>
</div>
</template>
