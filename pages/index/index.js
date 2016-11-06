//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfos: {
      avatarUrl:'https://gw.alicdn.com/tps/TB1SsWQLFXXXXXMXVXXXXXXXXXX-1170-514.jpg_600x600.jpg',
      nickName:'lihuan'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
    // this.setData({
    //   'userInfos.avatarUrl':'https://img.alicdn.com/tps/TB1ZUjfLFXXXXcDXXXXXXXXXXXX-1200-434.jpg_600x600.jpg'
    // });
  },
  tapAction:function(){
    alert(this.data.motto);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onHide: function(){
    console.log('hide');
  }
})
