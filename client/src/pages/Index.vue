<template>
  <div>
    <div>Калькулятор временно в разработке...</div>
    <vButton @click="$emit('changePage', '/random')">Random</vButton>
    <vButton @click="$emit('changePage', '/auth')">Auth</vButton>
    <vButton @click="$emit('changePage', '/404')">404</vButton>
    <div>Пример использования simpleButton</div>
    <simple-button @click="" color="red">Оплатить</simple-button>
    <simple-button @click="$emit('changePage', '/404')" color="blue">404</simple-button>
  </div>
</template>

<script>
import vButton from '../components/vButton'
import simpleButton from '../components/SimpleButton'
export default {
  components: {
    vButton, simpleButton
  }
}
</script>

<style>

</style>
