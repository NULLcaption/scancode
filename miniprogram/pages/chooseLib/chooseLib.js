// pages/chooseLib/chooseLib.js
//引入外部的JS
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://www.zjxpp.com/upload/contents/2017/11/20171124095012_72233.jpg',
      'http://www.zjxpp.com/upload/contents/2017/11/20171124102952_49384.jpg',
      'http://www.zjxpp.com/upload/contents/2017/12/20171227114229_69068.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs: true,
    specIs: false,
    data: null
  },
  /**
   * tab操作
   */
  tabFun(e) {
    console.log(e)
    if (e.currentTarget.dataset.state == 1) {
      this.setData({
        tabIs: true
      })
    } else {
      this.setData({
        tabIs: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: app.globalData.openid,
      image: '/images/QRCode.jpg',
      width: 100,
      height: 100,
      colorDark: "#ff5f19",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
  confirmHandler: function (e) {
    var value = e.detail.value
    qrcode.makeCode(value)
  },
  inputHandler: function (e) {
    var value = e.detail.value
    this.setData({
      text: value
    })
  },
  tapHandler: function () {
    // 传入字符串生成qrcode
    qrcode.makeCode(this.data.text)
  },
  save: function () {
    console.log('save')
    // wx.showActionSheet({
    //   itemList: ['保存图片'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //     if (res.tapIndex == 0) {
    //       qrcode.exportImage(function (path) {
    //         wx.saveImageToPhotosAlbum({
    //           filePath: path,
    //         })
    //       })
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})