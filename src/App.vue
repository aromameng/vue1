<template>
  <div>
    <header class="header">
      <img class="logo" v-if="showLogo" src="assets/img/logo.png" />
      <span class="back" @click="back" v-if="showBack">返回</span>
      <h1>{{$route.title}}</h1>
      <div class="close" @click="menu">
        <span class="close-icon" v-bind:class="{'open':isopen}"></span>
      </div>
    </header>
    <div class="container">
      <router-view class="view" v-ref:pageview keep-alive></router-view>
    </div>
    <!--动态组件-->
    <component :is="currentView"></component>
  </div>
</template>
<script>
import store from './vuex/store.js'
import menu from './components/menu.vue'
export default {
  data() {
      return {
        isopen: false,
        currentView: '',
      }
    },
    components: {
      menu
    },
    store: store, //在根组件加入 store，让它的子组件和 store 连接
    computed: {
      showBack() {
        return !this.$route.wedgets || this.$route.wedgets.back;
      },
      showLogo() {
        return !this.$route.wedgets || this.$route.wedgets.logo;
      }
    },
    methods: {
      back: function() {
        history.back(-1);
      },
      menu: function() {
        this.isopen = !this.isopen;
        this.currentView = this.currentView.length > 0 ? '' : 'menu';
      }
    },
    events: {
      'open-menu': function(msg) {
        // 事件回调内的 `this` 自动绑定到注册它的实例上
        this.isopen = msg;
        this.currentView = '';
      }
    }
}
</script>
<style lang="scss">
@import "./assets/scss/_common.scss";
@import "./assets/fonts/font-awesome.min.css";
@import "./assets/scss/_main.scss";
@import "./assets/scss/app.scss";
</style>
