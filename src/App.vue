<template>
  <AppNavbar />
  <div class="fixed top-10 right-4 z-30 grid grid-cols-1 grid-rows-1 gap-1">
    <transition-group name="fade">
      <AppToast v-for="toast in toasts" :key="toast.id" :id="toast.id" :text="toast.text" />
    </transition-group>
  </div>
  <div class="py-16">
    <router-view/>
    <navigate-to-cart-btn v-if="routeName !== 'Cart' " />
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar/Index'
import NavigateToCartBtn from '@/components/Global/NavigateToCartBtn'
import AppToast from '@/components/Toast/Index'

export default {
  components: {
    AppNavbar,
    NavigateToCartBtn,
    AppToast
  },
  computed: {
    routeName () {
      return this.$route.name
    },
    showToast () {
      return this.$store.state.toast.show
    },
    toasts () {
      return this.$store.state.toast.toasts
    }
  }
}
</script>

<style lang="postcss">
body {
  font-family: 'Raleway', sans-serif;
}
.app-container {
  @apply w-full md:w-8/12 mx-auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
