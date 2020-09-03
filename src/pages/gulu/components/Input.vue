<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" 
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      >
    <template>
      <span>tubiao</span>
      <span>cuowutishi</span>
    </template>
  
  </div>
</template>

<script>
export default {
  name: 'GuluInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper 
    display: inline-block;
    font-size: 12px;
    input 
      height: 32px;
      border: 1px solid #999;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
    input:hover
      border-color: #666;
    input:focus
      outline: none;
      box-shadow: inset 0 1px 3px;
    input[disabled]
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;

  
</style>