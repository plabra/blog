let totop = document.querySelector('.totop')
    // 页面滚动窗口监听事件
    window.onscroll = function() {
      // 获取浏览器卷去的高度
      let high = document.documentElement.scrollTop || document.body.scrollTop
      if (high >= 50) {
        
        $.('.totop').fadeIn(50);
      } else {
      
        $.('.totop').fadeOut(50);
      }
    }
    // 点击返回顶部，可以加动画使其慢慢回到顶部
    totop.addEventListener('click',() => {
  
      
      $('html,body').animate.({scrollTop: "0px" });
    })
