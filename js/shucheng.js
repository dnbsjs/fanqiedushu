var shujia = document.getElementById("shujia");
get("json/shujia.json", function (data) {
    for (let i = 0; i < data.length; i++) {
        let html = `
        <div class="item">
            <img src="${data[i].img}">
            <div class="bookTitle">${data[i].title}</div>
            <div class="bookInfo">${data[i].info}</div>
        </div>
        `;
        shujia.innerHTML += html;
    }
});

var lqhb = document.getElementById("lqhb");
lqhb.addEventListener("click", function (e) {
    let coin = 0;
    try {
        coin = Number(localStorage.getItem("coin"));
    }
    catch {
        
    }
    coin += 800;
    localStorage.setItem("coin", coin);
    e.preventDefault();
});