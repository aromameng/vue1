<template>
	<div class="menu" transition="menu" v-if="isShow">
		<ul>
			<li @click="closeMenu" v-link="{ path: 'home' }">首页</li>
			<li @click="closeMenu" v-link="{ path: 'about' }">关于</li>
			<li @click="closeMenu" v-link="{ path: 'news' }">新闻</li>
		</ul>
	</div>
	<div class="menu-mask" @click="closeMenu" transition="mask" v-if="isShow"></div>
</template>
<script>
	export default {
        data () {
            return {
            	isShow:true	
            }
        },
        methods: {
        	closeMenu:function(){
        		this.isShow=!this.isShow;
        		//自定义事件，向父组件传递
        		this.$dispatch('open-menu',false);   		
        	}
        }
    }
</script>