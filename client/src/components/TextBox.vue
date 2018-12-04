<template>
  <input
      :type="type"
      class="text-box" 
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss">
.text-box {
  transition: .5s;

  width: 100%;
  box-sizing: border-box;

  padding: 3px 5px;
  
  outline: none;
  border: none;
  border: 1px solid rgb(11, 101, 107);
  background: transparent;

  color: #333;
  caret-color: #999;
  font-size: 13px;

  &:hover {
    border-bottom-color: rgb(33, 35, 145);
  }

  &:focus {
    border-bottom-color: rgb(51, 24, 114) !important;
  }

  &::placeholder {
    color: rgb(223, 223, 223);
  }
}
</style>
