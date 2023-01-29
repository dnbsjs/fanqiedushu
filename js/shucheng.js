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