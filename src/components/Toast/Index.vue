<template>
<div class="w-full bg-gray-800 text-white px-4 py-2 z-30">
  {{ text }}
  <a href="javascript:;" @click="hideToast({ id })" class="pl-2">
    <font-awesome-icon icon="times" class="text-xl align-middle" />
  </a>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    hideToast ({ id }) {
      this.$store.dispatch('toast/hide', { id })
    }
  }
}
</script>
