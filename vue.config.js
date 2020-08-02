module.exports  = {
  configureWebpack: {
    resolve:{
      //脚手架3默认配置了extensions 省略了.js .json .css 类似的后缀
      alias:{
        //已经默认了：'@'：'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}