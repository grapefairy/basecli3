import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建router实例
const routes  = [

]

const router  = new VueRouter({
  routes,
  mode:'history'
})


//导出后去main.js挂载
export default router
