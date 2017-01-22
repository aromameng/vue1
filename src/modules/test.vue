<template>
  <div class="view-test">
    <img class="preview-img" v-for="item in list" :src="item.src" height="100" @click="$preview.open($index, list)">

    <ul class="slide-left">
      <li v-for="item of items" @touchmove.prevent="touchmove($event)" @touchstart="touchstart($event, $index)" @touchend="touchend">
          <div class="li-right">
              <a class="delete" :style="{transform: 'translate('+transX[$index]+'px, 0)'}">删除</a>
          </div>
         <p class="li-main" :style="{transform: 'translate('+transX[$index]+'px, 0)'}">{{item.title}}</p>
      </li>
    </ul>
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
        }],
        items:[
          {
            title:'呵呵哈哈哈'
          },
          {
            title:'呵呵哈哈哈'
          },
          {
            title:'呵呵哈哈哈'
          },
          {
            title:'呵呵哈哈哈'
          },
          {
            title:'呵呵哈哈哈'
          },
        ],
        startTime: 0,
        duration: 0,
        startX: 0,
        transX: [],
        currIndex: 0,
        maxDis: 200,
        minDis: 80,
        enableRight: false
      }
    },
    created(){
      console.log($)
    },
    components: {

    },
    methods: {
      touchstart(event, index) {
          this.startTime = new Date();
          this.startX = event.touches[0].pageX;
          this.currIndex = index;
      },
      touchmove(event) {
          let distance = event.touches[0].pageX - this.startX;
          // 向左滑动
          var leftSlide = () => {
              if (Math.abs(distance) > this.maxDis) {
                  distance = -this.maxDis;
              }
              this.transX.$set(this.currIndex, distance);
          }
          if (!this.enableRight) {
              if (distance > 0) {
                  return;
              }
              leftSlide();
          } else {
              if (distance < 0) {
                  leftSlide();
                  this.enableRight = false;
              } else {
                  if (this.transX[this.currIndex] >= 0) {
                      return;
                  }
                  this.transX.$set(this.currIndex, distance - this.minDis);
              }
          }
      },
      touchend() {
          // this.enableRight 当前状态，删除按钮是否显示
          if (!this.enableRight) {
              // 不足最小宽度，则返回0
              if (Math.abs(this.transX[this.currIndex]) < this.minDis) {
                  this.transX.$set(this.currIndex, 0);
                  return
              }
              this.transX.$set(this.currIndex, -this.minDis);
              this.enableRight = true;
          } else {
              this.transX.$set(this.currIndex, 0);
              this.enableRight = false;
          }
      },
    }
}
</script>
<style lang="scss" scoped>
	.view-test{
    padding: 10px 0;
    overflow: hidden;
    .preview-img{
      width: 100px;
      margin: 10px;
    }
    .slide-left{
      li{
        line-height: 50px;
        position: relative;
        padding-left: 15px;
        &:after{
          position: absolute;
          content: '';
          bottom: 0;
          left: 15px;
          height: 1px;
          width: 100%;
          background: #ccc;
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
        }
      }
    }
    .li-right {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        display: flex;
        .delete {
            line-height: 50px;
            color: #fff;
            background: red;
            height: 100%;
            padding: 0 20px;
            width: 100%;
            display: flex;
            &:before {
                position: absolute;
                z-index: -1;
                top: 0;
                width: 600%;
                height: 100%;
                content: '';
                background: inherit;
            }
        }
    }
    .li-main {}
    .delete,
    .li-main {
        -webkit-transition: -webkit-transform 300ms ease;
        transition: transform 300ms ease;
    }
  }
</style>
