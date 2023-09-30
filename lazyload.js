let imgs = [...document.querySelectorAll('img')];
 window.addEventListener('scroll', function () {
    imgs.forEach(img => {
      if (img.getBoundingClientRect().top < window.innerHeight) { 
     
        let dataSrc = img.getAttribute(' data-src'); // 获取 data-src 真实的地址
        img.setAttribute('src', dataSrc); // 将 真实的地址 替换为 src属性
        console.log(img.src);
      }
    })
  })
