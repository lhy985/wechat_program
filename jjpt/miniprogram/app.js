//app.js
App({
   //全局数据
   globalData: {
    //用户ID
    userId: '',
    //用户信息
    userInfo: null,
    //授权状态
    auth: {
      'scope.userInfo': false
    },
    //登录状态
    logged: false
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'jjpt-8gg8t0q1410ffd48',
        traceUser: true,
      })
    }

    //this.globalData = {  这个为空本来就有要不要注释掉？不确定
      //用户ID
      //userId: '',
      //用户信息
      //userInfo: null,
      //授权状态
      //auth: {
      //  'scope.userInfo': false
      //},
      //登录状态
      //logged: false
    //}
  }
})
