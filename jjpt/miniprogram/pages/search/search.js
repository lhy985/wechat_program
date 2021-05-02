
var text=''
 
Page({
  data: {
 
  },
  see(){
 
    var that=this
    const db = wx.cloud.database()
    const school = db.collection('class')
    school.where({
      name: {
        $regex: '.*' + text + '.*',
        $options: '1'
      }
    }).get({
      success: res => {
        console.log('匹配', res)
        if (res.data.length == 0) {
          wx.showModal({
            title: '提示',
            content: '暂时没找到课程或教师',
            showCancel: false,
            success: function (res) { }
          })
          return;
        }else{
          that.setData({
            obj: res.data
          })
        }
      }
    })
  },
 
  input_p(e){
    text = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('--------------1')
 
  },
})