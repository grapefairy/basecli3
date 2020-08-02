<template>
  <div id="app">

  </div>
</template>

<script>
  //  components/common/
  import Scroll from 'components/common/better-scroll/Scroll'


  export default {
    name: 'App',
    components: {
      Scroll
    },
    data(){
      return {
        // banners:[],
        // recommends:[],
      }
    },
    // created() {
    //   //生命周期函数请求所有数据
    //   gitHomeMultidata().then(res => {
    //     console.log(res);
    //     this.banners  = res.data.banner.list;
    //     this.recommends =res.data.recommend.list;
    //   })
    // }
  }
</script>

<style>
@import "./assets/css/base.css";
</style>
