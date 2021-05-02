Page({
  data: {
    imgUrls: [
      'https://z3.ax1x.com/2021/05/01/gVDmCT.png',
      'https://z3.ax1x.com/2021/05/01/gVDaxe.png',
      'https://z3.ax1x.com/2021/05/01/gVBvUP.jpg'
    ],
    contentImgUrls:[
      {
        title:'找家教，来名校',
        url:'https://z3.ax1x.com/2021/05/01/gVDoaq.png'
      },{
        title:'985家教平台',
        url:'https://z3.ax1x.com/2021/05/01/gVDsat.jpg'
      },{
        title:'上门一对一',
        url:'https://z3.ax1x.com/2021/05/01/gVDrVI.png'
      },{
        title:'顶尖师资力量',
        url:'https://z3.ax1x.com/2021/05/01/gVDyIP.png'
      }
    ],
    HotImgUrls: [
      {
        head:'https://z3.ax1x.com/2021/05/01/gVDXM4.jpg',
        title:'数学',
        content: '数学领域校内顶尖学生、数学学院学长学姐、高考高分学生一对一辅导，教学内容涵盖初高中数学、高等数学、竞赛数学辅导等。',
        url: 'https://z3.ax1x.com/2021/05/01/gVDfMQ.png'
      },
      {
        head: 'https://z3.ax1x.com/2021/05/01/gVDXM4.jpg',
        title: '英语',
        content: '英语专业研究生或外国留学生授课，全面提升英语听读写能力，辅导内容包括高一至高三英语，英语四六级、雅思托福等。',
        url: 'https://z3.ax1x.com/2021/05/01/gVDgG8.png'
      },
      {
        head: 'https://z3.ax1x.com/2021/05/01/gVDXM4.jpg',
        title: '编程',
        content: '计算机系大佬带你了解计算机世界，了解前沿技术，深度学习、大数据分析，内容包括：C语言、汇编语言、python、java等',
        url: 'https://z3.ax1x.com/2021/05/01/gVDBqA.jpg'
      },
      {
        head: 'https://z3.ax1x.com/2021/05/01/gVDXM4.jpg',
        title: '专业课知识',
        content: '程序等于算法加数据结构，我们带您学好数据结构程序设计，掌握队列，堆栈，树，图等典型数据结构的设计与使用。',
        url:  'https://z3.ax1x.com/2021/05/01/gVDsat.jpg'
      }
    ],
    indicatorDots: true, //显示面板显示点
    autoplay: true,  //自动切换
    interval: 5000,  //切换时间
    duration: 1000  //动画时长
  },
  click:function(e) {
    console.log('click',e);
    wx.navigateTo({
      url: '../../pages/wenzhang/wenzhang',
    })
}
})