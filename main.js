import { createApp } from './node_modules/vue/dist/vue.esm-browser.prod.js'

const app = createApp({
  template:`
  <h1 @click="handleClick" :style="styleObject">Hello {{msg}}</h1>
  `,
  data() {
    return {
      msg: 'Vue',
      styleObject: {
        color: 'red',
        transition: '.5s all'
      }
    }
  },
  methods: {
    handleClick: function () {
      console.log('Hi Click!');
      this.styleObject.color = this.styleObject.color === 'red' ? 'blue': 'red'
    }
  },
  mounted() {
    console.log('欢迎来到vue，这里是通过浏览器的esbuild方式直接引入构建的vue页面！');
  }
})
app.mount('#app')
