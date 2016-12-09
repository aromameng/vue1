<template>
  <div class="newsview">
    <ul class="newsList">
      <li v-for="item in items" @click="go(item.id)">{{item.title}}</li>
    </ul>
    <a class="c-btn" @click="tip">点击提示</a>
    <dialog v-bind:show.sync="show">
      <header class="dialog-header" slot="header">
        <h1 class="dialog-title">提示信息</h1>
      </header>
      <div class="dialog-body" slot="body">
        <p>你想在对话框中放什么内容都可以！</p>
        <p>你可以放一段文字，也可以放一些表单，或者是一些图片。</p>
      </div>
      <footer class="dialog-footer" slot="footer">
        <button class="c-btn" @click="closeDialog">关闭</button>
      </footer>
    </dialog>
    <a class="c-btn" @click="openDialog">点击弹窗</a>
    <a class="c-btn" @click="addCount">点击计算点击次数</a>
    <p>点击次数为：{{nCount}}</p>
  </div>
</template>
<script>
import {
  toast
} from '../assets/js/util.js'
import dialog from '../components/dialog.vue'
import {
  addCount
} from '../vuex/actions'
import {
  count
} from '../vuex/getters'

export default {
  //==数据配置===
  data() {
      return {
        items: [{
          id: 1,
          title: '基本用法'
        }, {
          id: 2,
          title: '路由配置项'
        }, {
          id: 3,
          title: '路由实例属性'
        }, {
          id: 4,
          title: '路由对象与路由匹配'
        }, {
          id: 5,
          title: '动态组件载入'
        }],
        show: false,
        nCount: 0

      }
    },
    components: {
      dialog
    },
    methods: {
      go(id) {
        this.$route.router.go({
          'name': 'newsView',
          params: {
            index: id
          }
        });
      },
      tip() {
        toast("提示窗口！");
      },
      closeDialog() {
        this.show = false;
      },
      openDialog() {
        this.show = true;
      }
    },
    vuex: {
      actions: {
        addCount
      },
      getters: {
        count
      }
    },
    watch: {
      'count' (status) {
        this.nCount = this.count;
      }
    }
}
</script>
