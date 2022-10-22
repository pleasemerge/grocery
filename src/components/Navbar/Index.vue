<template>
<nav 
  :class="{ 
      'fixed top-0 left-0 h-20 w-full flex items-center z-10 transition-colors duration-500': true, 
      'bg-gradient-to-r from-lime-500 to-lime-600 text-white': pageScrolled 
    }"
  >
  <div class="app-container flex justify-between">
    <div class="w-4/12 px-2 md:px-0">
      <router-link :to="{ name: 'Home' }">
        <img src="/img/logo_new.png" />
      </router-link>
    </div>
    <div class="w-8/12 hidden sm:flex items-center justify-end">
      <router-link 
        v-for="link of navLinks" 
        :key="link" 
        :to="{ name: link.to }" 
        class="px-2 hover:text-gray-700"
      >
          {{link.name}}
        </router-link>
        <router-link :to="{ name: 'Cart' }" class="px-4 py-2 text-gray-600 bg-white hover:bg-gray-300 transition-colors duration-200 rounded-md border">
          <img src="/img/icons/cart_icon.png" class="inline-block" />
           ${{total}}
        </router-link>
    </div>
    <div class="block sm:hidden relative flex flex-wrap justify-end items-center z-10 px-2">
      <a href="javascript:;" @click="toggleNavMenu" v-if="!showNavMenu"><font-awesome-icon icon="bars" class="text-2xl" /></a>
      <div v-if="showNavMenu" class="absolute top-2 right-2 px-4 py-3 bg-white text-black border rounded">
        <router-link 
          v-for="link of navLinks" 
          :key="link" 
          :to="{ name: link.to }" 
          class="block px-2 hover:text-gray-700"
          @click="toggleNavMenu"
        >
          {{link.name}}<br/>
        </router-link>
      </div>
    </div>
     <div class="fixed top-0 w-screen h-screen min-h-full bg-gray-900 opacity-30 -z-10" v-if="showNavMenu" @click="toggleNavMenu()"></div>
  </div>
 
</nav>
</template>

<script>
export default {
  data () {
    return {
      pageScrolled: false,
      showNavMenu: false,
      navLinks: [
        { name: 'Home', to: 'Home' },
        { name: 'Shop', to: 'Shop' },
        { name: 'About', to: 'About' }
      ]
    }
  },
  methods: {
    handleScroll () {
      this.pageScrolled = window.scrollY > 0
    },
    toggleNavMenu () {
      this.showNavMenu = !this.showNavMenu
    }
  },
  computed: {
    cart () {
      return this.$store.getters['cart/items']
    },
    total () {
      return this.cart.reduce((acc, current) => {
        return acc += current.discountedPrice
      }, 0)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
