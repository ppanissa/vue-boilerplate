<template>
  <button
    class="button"
    :style="{ color: color, borderColor: color }"
    :class="{ rounded: rounded }"
    @click="handleClick"
    @dblclick="handleDblclick"
  >
    <slot />!
  </button>
</template>

<script>
export default {
  props: {
    rounded: Boolean,
    handleClick: {
      type: Function,
      default: () => () => null,
    },
    handleDblclick: {
      type: Function,
      default: () => () => null,
    },
    color: {
      type: String,
      default: '#42b983',
    },
  },
};
</script>

<style>
.rounded {
  border-radius: 5px;
}
.button {
  border: 3px solid;
  padding: 10px 20px;
  background-color: white;
  outline: none;
}
</style>
