// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "http://127.0.0.1:5501/webview.html?payOk=true"
  },


  onLoad: function(options) {
    console.log("webview接收到的参数---", options)
    //如果支付成功，这里重新刷新h5页面，并把支付成功的状态传递给h5
    // if (options.payOk) {
      this.setData({
        src: "http://127.0.0.1:5501/webview.html?payOk=true"
      })
    // }
  },

})