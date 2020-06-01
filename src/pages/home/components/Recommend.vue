<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
                title: '北京野生动物园',
                desc: '敢与森林之王近距离接触吗？'
            }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_200x200_3621a35a.jpg',
                title: '北京欢乐谷',
                desc: '亚洲唯一飞行式过山车等你来挑战'
            }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
                title: '颐和园',
                desc: '中国现存最大的皇家园林'
            }, {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/f4/f4aec6dee3d6f630a3.water.jpg_200x200_1a2e37cd.jpg',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>