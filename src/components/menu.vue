<template>
	<div class="menu" transition="menu" v-if="isShow">
		<ul>
			<li @click="clickMenu" v-bind:class="{'active':$route.name=='home'}" v-link="{ path: 'home' }">首页</li>
			<li @click="clickMenu" v-bind:class="{'active':$route.name=='about'}" v-link="{ path: 'about' }">关于</li>
			<li @click="clickMenu" v-bind:class="{'active':$route.name=='news'}" v-link="{ path: 'news' }">新闻</li>
		</ul>
	</div>
	<div class="menu-mask" @click="clickMenu" transition="mask" v-if="isShow"></div>
</template>
<script>

import {
  clickMenu
} from '../vuex/actions'

	export default {
        data () {
            return {
            	
            }
        },
        props: {
            isShow: {
                default: false,
                type: Boolean
            }
        },
        methods: {
        	
        },
        vuex: {
          actions: {
            clickMenu
          }
        }
    }
</script>