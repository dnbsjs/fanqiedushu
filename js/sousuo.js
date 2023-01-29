let placeholderWords = [
    "中华上下五千年",
    "三国演义",
    "水浒传",
    "西游记",
    "红楼梦",
    "盗墓笔记",
    "骆驼祥子",
];
let arrCur = 1;
let search = document.getElementById("search1");
search.setAttribute("placeholder", placeholderWords[0]);
setInterval(function () {
    if (arrCur >= placeholderWords.length) {
        arrCur = 0;
    }
    search.setAttribute("placeholder", placeholderWords[arrCur]);
    arrCur++;
}, 3000);

document.getElementById("searchBtn").addEventListener("click", function (e) {
    let input = search.value;
    let historyList = document.getElementById("history");
    let elem = `<li>${input}</li>`
    historyList.innerHTML += elem;
    search.value = "";
    e.preventDefault();
});

document.getElementById("clearHistory").addEventListener("click", function (e) {
    document.getElementById("history").innerHTML = "";
    e.preventDefault();
});

var topList = document.getElementById("top");
get("json/sousuotop.json", function (data) {
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

var discover = document.getElementById("discover");
get("json/sousuofaxian.json", function (data) {
    for (let i = 0; i < data.length; i++) {
        let html = `
        <li>${data[i]}</li>
        `;
        discover.innerHTML += html;
    }
    var words = document.querySelectorAll(".ls>#discover>li");
    for (let i = 0; i < words.length; i++) {
        words[i].addEventListener("click", function (e) {
            let text = words[i].innerHTML;
            search.value = text;
            e.preventDefault();
        })
    }
});