<template>
<div>
  <span class="text-gray-500 text-sm">{{country}}</span>
</div>
</template>

<script>
export default {
  props: {
      country: {
          type: String,
          required: false
      }
  }
}
</script>
