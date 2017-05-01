<template>
  <p>Hello {{prop}}</p>
</template>

<script>
export default {
  props: ['prop']
}
</script>

<style lang="sass" scoped>
p {
  color: red;
}
</style>