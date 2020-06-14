<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false, // 滑动状态，false代表未滑动或者滑动结束
      startY: 0,
      timer: null
    };
  },
  updated() {
    // 页面第一个元素A距离顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 开始拖动
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 手指所处位置的元素距离顶部位置减去绿色title搜索部分的高度
          const touchY = e.touches[0].clientY - 79
          // 计算出当前手指所处位置的元素下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
