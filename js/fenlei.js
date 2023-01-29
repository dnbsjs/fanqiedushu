window.onscroll = function () {
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(st);
    var head = document.getElementById("fixed");
    if (st > 100) {
        head.style.display = "flex";
        head.style.position = "fixed";

        //复杂的改变使用classList
    } else {
        head.style.display = "flex";
        head.style.position = "static";
    }
}

// 初始化为所有页面不显示，随后默认显示第一页，与导航栏状态相对应
var tabPage = document.querySelectorAll(".chuban");
for (let i = 0; i < tabPage.length; i++) {
    tabPage[i].style.display = "none";
}
tabPage[0].style.display = "block";

// 添加导航栏按钮监听事件，点击一次切换页面和导航栏选中状态样式
var naviBtn = document.querySelectorAll(".tab>.tt>a");
for (let i = 0; i < naviBtn.length; i++) {
    let item = naviBtn[i];
    naviBtn[i].addEventListener("click", function(e) {
        // 先都为不选中，再将点击的那个变为选中
        for (let j = 0; j < naviBtn.length; j++) {
            naviBtn[j].querySelector("span").classList.remove("cur");
        }
        naviBtn[i].querySelector("span").classList.add("cur");
        for (let j = 0; j < tabPage.length; j++) {
            tabPage[j].style.display = "none";
        }
        tabPage[i].style.display = "block";
        e.preventDefault();
    });
}