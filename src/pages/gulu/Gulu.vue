<template>
  <div class="con">
    <gulu-input value="zhangsan"></gulu-input>
    <gulu-input value="lisi" disabled></gulu-input>
    <gulu-input value="error" error="姓名不能有空格"></gulu-input>
    <gulu-input value="change" @change="inputChange"></gulu-input>
  </div>
</template>

<script>
import GuluInput from './components/Input'
export default {
  name: 'Gulu',
  components: {
    GuluInput
  },
  methods: {
    inputChange(e) {
      console.log('iiiii', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .con
    margin-top: 40px;
</style>