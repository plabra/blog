window.addEventListener('scroll', function () {
    let imgs = [...document.querySelectorAll('.img')]
    const callback = entries => { // entries 是观察的元素数组
        entries.forEach(ele => {
            if (ele.isIntersecting) { // isIntersecting  是否被观察到
                const data_src = ele.target.getAttribute('data-src'); //这里基本和 Method1/Method2一样
                ele.target.setAttribute('src', data_src); // ele.target 是目标元素
                observe.unobserve(ele.target) // 真实地址替换后 取消对它的观察
            }
        })
    };
    const observe = new IntersectionObserver(callback); // 实例化 IntersectionObserver
    imgs.forEach(image => { 
        observe.observe(image) // observe : 被调用的IntersectionObserver实例。给每个图片添加观察实例
    })
  }
