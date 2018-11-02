//index.js
const app = getApp()
Page({

  data: {
    
  },

  /**
   * 初始化数据
   */
  onLoad: function (options) {

  },

  /**
   * 扫一扫
   */
  submitFun: function () {
    console.log("扫一扫获取二维码")
    var scanCodeInfo = "";
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        that.setData({
          scanCodeInfo: res.result
        })
        wx.showToast({
          title: '扫描成功',
          icon : 'success',
          duration : 2000
        })
        wx.navigateTo({
          url: '/pages/chooseLib/chooseLib',
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '扫描失败',
          icon: 'none',
          duration: 2000
        })
      },
      //扫描完成后跳转至活动详情页面
      complete: (res) => {
        // console.log(res.errMsg),
        // wx.navigateTo({
        //   url: '/pages/chooseLib/chooseLib',
        // })
      }
    })
  },
  /**
   * 查看已参加活动
   */
  submitFun1: function () {
    wx.navigateTo({
      url: '/pages/userConsole/userConsole',
    })
  }
})
