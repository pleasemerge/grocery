<template>
<div 
  class="h-96 w-full z-0 bg-cover" 
  :style="{ backgroundImage: `url(${bgImage})` }"
>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    bgImage: {
      type: String,
      required: true
    }
  },
}
</script>
