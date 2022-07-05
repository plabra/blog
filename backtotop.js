let totop = document.querySelector('.totop')
    // 页面滚动窗口监听事件
    window.onscroll = function() {
      // 获取浏览器卷去的高度
      let high = document.documentElement.scrollTop || document.body.scrollTop
      if (high >= 1200) {
        totop.style.display = 'block'
      } else {
        totop.style.display = 'none'
      }
    }
    // 点击返回顶部，可以加动画使其慢慢回到顶部
    totop.addEventListener('click',() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
