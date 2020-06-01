<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: '//img1.qunarzz.com/sight/p0/201311/12/3e2de7e7f2fa170fc8d65eac.jpg_600x330_c73533f8.jpg',
                title: '北京野生动物园',
                desc: '敢与森林之王近距离接触吗？'
            }, {
                id: '0002',
                imgUrl: '//img1.qunarzz.com/sight/p0/1901/ea/ea459039354370daa3.img.jpg_600x330_fb7c3a59.jpg',
                title: '北京欢乐谷',
                desc: '亚洲唯一飞行式过山车等你来挑战'
            }, {
                id: '0003',
                imgUrl: '//img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg',
                title: '颐和园',
                desc: '中国现存最大的皇家园林'
            }, {
                id: '0004',
                imgUrl: '//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg',
                title: '古北水镇司马台新村山水城',
                desc: '身临“野性天地”，感受“适者生存”'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>