let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        // 如果元素的交叉比例大于零，表示图片进入了视口，可以加载图片
        entry.target.src = entry.target.dataset.src; // 将 data-src 的值赋值到 src 属性上
        observer.unobserve(entry.target); // 加载完成后，停止监听当前元素
      }
    });
  },
  {
    threshold: 0.01, // 交叉比例
  }
);

// 监听所有需要进行懒加载的图片
document.querySelectorAll('img[data-src]').forEach((img) => {
  observer.observe(img);
});

// 获取所有需要进行懒加载的图片
let lazyImgs = document.querySelectorAll('img[data-src]');

// 滚动事件监听函数
let lazyLoad = function () {
  lazyImgs.forEach((img) => {
    // 获取图片距离页面顶部的距离
    let imgTop = img.getBoundingClientRect().top;
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    // 如果图片进入了视口
    if (imgTop < windowHeight && imgTop > 0) {
      // 将 data-src 的值赋值到 src 属性上
      img.src = img.dataset.src;
      // 加载完成后，删除监听事件
      img.addEventListener('load', () => {
        img.removeAttribute('data-src');
      });
    }
  });
};

// 立即执行一次懒加载函数
lazyLoad();

// 添加滚动事件监听
window.addEventListener('scroll', lazyLoad);
