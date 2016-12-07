import Vue from 'vue'
import helper from './helper'

/* 弹出错误信息
    @param msg `String` 要显示的错误信息
    @param handler `Function` 显示完错误信息之后要执行的函数 - 可选
    @param duration `Number` 错误信息停留的时间（毫秒） - 可选
   Usage:
    toast(res.status.msg, function () {
      // do something...
    }, 1000)
*/
export const toast = function(msg, handler = function() {}, duration = 2000) {
  var tip = new Vue({
    data: {
      msg: msg
    },
    template: '<div class="cp-toast" transition="scale"><table><tr><td><span class="msg">{{msg}}</span></td></tr></table></div>',
    ready() {
      var _this = this;
      if (duration != 'forever') {
        setTimeout(function() {
          _this.$destroy(true);
        }, duration);
      }
    },
    destroyed() {
      handler();
    }
  });
  tip.$mount().$appendTo('body');   // 手动挂载
}