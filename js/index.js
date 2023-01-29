window.onscroll = function () {
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    var box = document.getElementById("backToTop");
    if (st > 100) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

document.getElementById("backToTop").addEventListener("click", function(e) {
    document.documentElement.scrollTop = 0;
    e.preventDefault();
});

// 排行榜加载JSON
var topList = document.getElementById("top");
get("json/shuchengtop.json", function (data) {
    for (let i = 0; i < data.length; i++) {
        let html = `
        <div class="item">
            <div class="seq${i < 3 ? " top" : ""}">${i + 1}</div>
            <img src="${data[i].img}">
            <div class="text">
                <div class="title">${data[i].title}</div>
                <div class="info">${data[i].info}</div>
            </div>
        </div>
        `;
        topList.innerHTML += html;
    }
});