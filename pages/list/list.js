Page({
  data:{
    // text:"这是一个页面"
    items:[
        'wang yafei',
        'lihuan'
    ]
  },
  onItem0:function(){
      console.log(this.data.items[0]);
      wx.navigateTo({
          url:'../index/index'
      });
  },
  onItem1:function(){
      console.log(this.data.items[1]);
      wx.navigateTo({
          url:'../logs/logs'
      });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('page onload');
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})