<template>
  <div class="newsview">
    <div class="view-content">
      {{content}}
      <p>点击次数为：{{count}}</p>
    </div>
  </div>
</template>
<script>
import {
  count
} from '../vuex/getters'
export default {

  //==数据配置===
  data() {
      return {
        id: '',
        title: '',
        content: '',
        items: [{
          id: 1,
          title: '基本用法',
          content: '电话好多好多好多好多好多好多大家觉得'
        }, {
          id: 2,
          title: '路由配置项',
          content: 'dfag地方放顶顶顶顶顶'
        }, {
          id: 3,
          title: '路由实例属性',
          content: '在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成：'
        }, {
          id: 4,
          title: '路由对象与路由匹配',
          content: 'mixin的强大之处，在于可以指定参数和缺省值。'
        }, {
          id: 5,
          title: '动态组件载入',
          content: 'SASS提供了一些内置的颜色函数，以便生成系列颜色。'
        }]
      }
    },
    ready() {

    },
    computed: {

    },

    //==路由配置===
    route: {
      data() { //获取数据
        var _this = this;
        this.title = this.$route.title;
        this.id = this.$route.params.index;
        this.items.forEach(function(item, i) {
            if (_this.id == i) {
              _this.content = item.content;
            }
          })
          //this.content=this.items[this.id].content;
      }
    },

    components: {

    },

    created() {},

    compiled() {},

    destroyed() {},

    methods: {

    },
    vuex: {
      getters: {
        count
      }
    }
}
</script>
