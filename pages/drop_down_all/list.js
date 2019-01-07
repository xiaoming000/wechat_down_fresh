// pages/drop_down/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    num: 0,
    page: 1,
    list: [],
  },
  fetch_page: function (page) {
    var that = this;
    // 模拟网络延迟
    setTimeout(function () {
      that.setData({
        hidden: true
      });
    }, 300);
    wx.request({
      url: 'http://wx.hzyaoyi.cn/02-jichu/zixun_list_asp.asp',
      data: {
        mypage: page
      },
      success: function (res) {
        for (var i=0; i<res.data.length; i++){
          var obj = {};
          obj.id = res.data[i].id;
          obj.title = res.data[i].title
          var data_list = that.data.list;
          data_list.push(obj);
        };
        that.setData({
          list: data_list
        });
        that.setData({hidden:false})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.fetch_page(that.data.page);
    wx.request({
      url: 'http://wx.hzyaoyi.cn/02-jichu/zixun_list_asp0.asp',
      method: 'GET',
      success: function (res) {
        that.setData({
          num: res.data
        })
      }
    })
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
    console.log("到达底部！");
    var that = this;
    this.setData({
      page: ++that.data.page
    });
    this.fetch_page(this.data.page);  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})