<template>
<span>
  <router-link :to="{ name: 'ShowProduct', params: { name } }">{{name}}</router-link>
</span>
</template>

<script>
export default {
  props: ['name']
}
</script>
