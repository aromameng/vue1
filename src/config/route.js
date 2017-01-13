import home from '../modules/home.vue'
import about from '../modules/about.vue'
import news from '../modules/news.vue'
import newsView from '../modules/newsView.vue'
import test from '../modules/test.vue'

export default {
	'/home': {
    name: 'home',
    component: home,
    title: '首页',
    wedgets: {
      header: false,
      back: false, // 无后退按钮
      bottom: true, //底部导航是否显示
      logo:true,
      menu:true
    }
  },
  '/about': {
    title: '关于我们',
    component: about,
    name: 'about',
    wedgets: {
      back: true,
      logo:false,
      menu:true
    }
  },
  '/news': {
    name: 'news',
    component: news,
    title: '新闻中心',
    wedgets: {
      back: true,
      logo:false,
      menu:true
    }
  },
  '/newsView/:index': {
    name: 'newsView',
    component: newsView,
    title: '新闻详情',
    wedgets: {
      back: true,
      logo:false
    }
  },
	'/test': {
    name: 'test',
    component: test,
    title: '测试',
    wedgets: {
      back: true,
      logo:false,
			menu:true
    }
  }
}
