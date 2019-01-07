// pages/drop_down/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    page:1,
    list:[],
  },
  fetch_page:function(page){
    var that = this;
    wx.request({
      url: 'http://wx.hzyaoyi.cn/02-jichu/zixun_list_asp.asp',
      data:{
        mypage:page
      },
      success: function (res) {
        that.setData({
          list: res.data,
        }),
        console.log(res)
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
      success:function(res){
        that.setData({
          num:res.data
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
      page: ++that.data.page,
    });    if(this.data.page < this.data.num){
      this.fetch_page(this.data.page);
    } else if (this.data.page = this.data.num){
      // 返回的数据最后一页有问题，另外做处理！不过这里并未真正解决
      wx.request({
        url: 'http://wx.hzyaoyi.cn/02-jichu/zixun_list_asp.asp',
        data: {
          mypage: this.data.page
        },
        success: function (res) {
          that.setData({
            list: res,
          }),
            console.log(res)
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})