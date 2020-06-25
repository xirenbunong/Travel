<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://n3.hdfimg.com/g3/M05/07/00/v4YBAF7sZdmAdMTSAACZpO2EkPs940_800_800_1.jpg?340d" />
            <div class="banner-info">
                <div class="banner-tittle">
                <!-- {{this.sightName}} -->
                海洋世界
                </div>
                <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                <!-- {{this.bannerImgs.length}} -->39
                </div>
            </div>
        </div>
        <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
    </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary";
export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    },
    // props: {
    //     sightName: String,
    //     bannerImg: String,
    //     bannerImgs: Array
    // },
    data () {
        return {
            showGallary: false,
            imgs: ['https://n3.hdfimg.com/g3/M05/07/00/v4YBAF7sZdmAdMTSAACZpO2EkPs940_800_800_1.jpg?340d']
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem

</style>