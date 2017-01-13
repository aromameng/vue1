<template>
  <div>
    <header class="header">
      <img class="logo" v-if="showLogo" src="assets/img/logo.png" />
      <span class="back" @click="back" v-if="showBack">返回</span>
      <h1>{{$route.title}}</h1>
      <div class="close" @click="clickMenu" v-if="showMenu">
        <span class="close-icon" v-bind:class="{'open':menu}"></span>
      </div>
    </header>
    <div class="container">
      <router-view class="view" v-ref:pageview keep-alive></router-view>
    </div>
    <!--动态组件-->
    <!-- <component :is="currentView"></component> -->
    <menulist :is-show="menu"></menulist>
  </div>
</template>
<script>
import store from './vuex/store.js'
import menulist from './components/menu.vue'

import {
  clickMenu
} from './vuex/actions'
import {
  menu
} from './vuex/getters'

export default {
  data() {
      return {
        currentView: '',
      }
    },
    components: {
      menulist
    },
    store: store, //在根组件加入 store，让它的子组件和 store 连接
    computed: {
      showBack() {
        return !this.$route.wedgets || this.$route.wedgets.back;
      },
      showLogo() {
        return !this.$route.wedgets || this.$route.wedgets.logo;
      },
      showMenu(){
        return !this.$route.wedgets || this.$route.wedgets.menu;
      }
    },
    methods: {
      back: function() {
        history.back(-1);
      },
    },
    vuex: {
      actions: {
        clickMenu
      },
      getters: {
        menu
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
