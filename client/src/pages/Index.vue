<template>
  <div>
    <div>Калькулятор временно в разработке...</div>
    <vButton @click="$emit('changePage', '/random')">Random</vButton>
    <vButton @click="$emit('changePage', '/auth')">Auth</vButton>
    <vButton @click="$emit('changePage', '/404')">404</vButton>
  </div>
</template>

<script>
import vButton from '../components/vButton'
export default {
  components: {
    vButton
  }
}
</script>

<style>

</style>
