function reOrder(size) {
    if (size.matches) { // If media query matches
        const list = document.querySelector("#switch");
        if(list.firstElementChild==article){
            list.appendChild(list.firstElementChild);
        }
        return;
    } else {
        const list = document.querySelector("#switch");
        if(list.firstElementChild!=article){
            list.appendChild(list.firstElementChild);
        }
        return;
    }
}

const article = document.querySelector("#switch article")
var size = window.matchMedia("(max-width: 1080px)")
reOrder(size)
size.addListener(reOrder)