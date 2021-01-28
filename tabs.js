// TABS
let tabItem = document.querySelectorAll(".tab-item");
let tabContentText = document.querySelectorAll(".tabs-text-p");
let tabContentImg = document.querySelectorAll(".tabs-img");
let tabsWrap = document.querySelector(".tabs-wrap");

function hideTabsContent () {
    tabContentText.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");
    })
    tabContentImg.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");
    })
    tabItem.forEach(item => {
        item.classList.remove("active");
    })
}

function showTabsContent(i = 0) {
    tabContentText[i].classList.add("show");
    tabContentText[i].classList.remove("hide");
    tabContentImg[i].classList.add("show");
    tabContentImg[i].classList.remove("hide");
    tabItem[i].classList.add("active");
}

hideTabsContent();
showTabsContent();

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;
    console.log(target);
    if (target.classList.contains("tab-item")) {
        tabItem.forEach((item,i) => {
            if(target == item) {
                hideTabsContent ();
                showTabsContent (i);
            }
        })
    }
})