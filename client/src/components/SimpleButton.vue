<template>
  <button
      :class="['btn', className]"
      @click="$emit('click', $event.target.value)">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'simpleButton',
  props: {
     color: String
  },
  computed: {
     className: function() {
        if (this.color === "blue" || this.color === "red")
           return (this.color + "Btn");
        return "blueBtn"
     }
  }
}
</script>

<style lang="scss">
.btn {
  transition: background-color 0.1s linear;

  display: inline-block;

  outline: none;
  border: 1px solid #64bab7;
  border-radius: 10px;
  box-shadow: 4px 4px 7px rgba(100, 186, 183, 0.75),
  inset 1px 1px 2px white,
  inset -1px -1px 2px black;

  width: 150px;
  height: 40px;

  font: 20px Arial;
  color: white;

  text-align: center;
  user-select: none;

  &:active {
    box-shadow: 4px 4px 7px rgba(100, 186, 183, 0.75),
    inset 1px 1px 2px black;
  }

  &:hover {
    /*FIXME*/
  }
}

.blueBtn {
  background: linear-gradient(to top, #087d78 0%,  #64BAB7 100%);
}

.redBtn {
  background: linear-gradient(to top, #A51F29 0%,  #FF616C 100%);
}
</style>