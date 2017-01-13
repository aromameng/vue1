<template>
  <div class="view-test">
    <img class="preview-img" v-for="item in list" :src="item.src" height="100" @click="$preview.open($index, list)">
  </div>
</template>
<script>
import {
  toast
} from '../assets/js/util.js'

import $ from 'webpack-zepto';

export default {
  //==数据配置===
  data() {
      return {
        list: [{
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484306673591&di=8d1f6847b335b09710a4a5668ab19948&imgtype=0&src=http%3A%2F%2Fimg.hb.aicdn.com%2F761f1bce319b745e663fed957606b4b5d167b9bff70a-nfBc9N_fw580',
          w: 600,
          h: 400
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1484296620&di=7e744e02326416e77eecf20e79baf90b&src=http://ww2.sinaimg.cn/crop.0.0.1080.1080.1024/80ac575djw8elffuuas6cj20u00u0wge.jpg',
          w: 1200,
          h: 900
        },{
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1484296675&di=f5dfacca8e5019462514573a22689586&src=http://img5q.duitang.com/uploads/item/201401/02/20140102161027_uHxc8.thumb.700_0.jpeg',
          w: 1200,
          h: 900
        }]
      }
    },
    created(){
      console.log($)
    },
    components: {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
	.view-test{
    .preview-img{
      width: 100px;
      margin: 10px;
    }
  }
</style>
