<template>
<figure class="w-full flex justify-center">
  <img :src="imgSrc" class="block h-32 object-cover" />
</figure>
</template>

<script>
export default {
  props: ['imgSrc']
}
</script>
