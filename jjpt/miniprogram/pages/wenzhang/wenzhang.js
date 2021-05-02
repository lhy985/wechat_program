Page({
  data: {
    //顶部轮播图
    //imgUrls: [
    //  'imgs/2.png',
    //  'imgs/5.png',
    //  'imgs/1.jpg'
      //'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=63967211,2305810881&fm=27&gp=0.jpg',
      //'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3265697507,322543478&fm=27&gp=0.jpg',
      //'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=985354164,1752304932&fm=26&gp=0.jpg'
    //],
    //第二部分数据数组
    contentImgUrls:[
      {
        title:'找家教，来名校',
        //url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2716688360,1326705556&fm=27&gp=0.jpg'
        url:'imgs/12.png'
      },{
        title:'985家教平台',
        url:'imgs/8.jpg'
        //url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2527034280,2956682531&fm=27&gp=0.jpg'
      },{
        title:'上门一对一',
        url:'imgs/7.png'
        //url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=689739696,3300191086&fm=27&gp=0.jpg'
      },{
        title:'顶尖师资力量',
        url:'imgs/9.png'
        //url:'http://img4.imgtn.bdimg.com/it/u=4258802685,2724420509&fm=26&gp=0.jpg'
      }
    ],
    //死三部分数据
    HotImgUrls: [
      {
        //头像地址,文字标题,文字内容,图片地址
        head:'imgs/14.jpg',//'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title:'数学',
        content: '数学领域校内顶尖学生、数学学院学长学姐、高考高分学生一对一辅导，教学内容涵盖初高中数学、高等数学、竞赛数学辅导等。',
        url: 'imgs/11.png'//'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1532027772,1266945951&fm=27&gp=0.jpg'
      },
      {
        head: 'imgs/14.jpg',//'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '英语',
        content: '英语介绍',
        url: 'imgs/10.png'//'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2404695142,3634522143&fm=27&gp=0.jpg'
      },
      {
        head: 'imgs/14.jpg',//'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '编程',
        content: '编程介绍',
        url: 'imgs/6.jpg'// 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2225874892,982427892&fm=26&gp=0.jpg'
      },
      {
        head: 'imgs/14.jpg',//'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '专业课知识',
        content: '专业课介绍',
        url:  'imgs/8.jpg'//'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4216945098,3102493232&fm=26&gp=0.jpg'
      }
    ],
    indicatorDots: true, //显示面板显示点
    autoplay: false,  //自动切换
    interval: 5000,  //切换时间
    duration: 1000  //动画时长
  },
  click:function(e) {
    console.log('-------------click',e);
    wx.navigateTo({
      url: '../../pages/wenzhang/wenzhang',
    })
}
})