<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    mounted () {
        this.getHomeInfo();
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            const resData = res.data;
            if (resData.ret && resData.data) {
                this.swiperList = resData.data.swiperList;
                this.iconList = resData.data.iconList;
                this.recommendList = resData.data.recommendList;
                this.weekendList = resData.data.weekendList;
            }
        }
    }
}
</script>

<style scoped>

</style>