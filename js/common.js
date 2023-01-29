function goTo(url) {
    window.location.href = url;
}

function get(url, successCallBack = null) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send(null);
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                let res = JSON.parse(ajax.responseText == "" ? '{}' : ajax.responseText);
                successCallBack(res);
            }
        }
    }
}