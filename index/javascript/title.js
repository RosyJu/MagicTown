const titleheight = "24px";
const title = document.querySelectorAll(".bodyleft .bottom > .title")
for (let i = 0; i < title.length ; i++) {
    title[i].style.height = titleheight
}
let iframe = document.querySelector(".bodyright .bottom iframe")
const iframeF = (html,title) => {
    let iframeA = html.getAttribute("for")
    iframe.src = `${iframeA}/${iframeA}.html`
    document.querySelector('.bodyright .top span').textContent = title
};
const directory = (div) => {
    let parent = div.parentElement;
    if (parent.style.height == "24px") {
        let tag = parent.querySelectorAll("div.title > div.subtitle > div.tag");
        if (tag.length > 0) {
            let titleheight = 26
            titleheight = titleheight + 24 * tag.length
            parent.style.height = titleheight + "px";
        }
    } else {
        parent.style.height = "24px"
    }
};
const subtitle = (div,title) => {
    let id = div.parentElement.parentElement.querySelector('label').getAttribute('for');
    iframe.src = `${id}/${title}.html`
    document.querySelector('.bodyright .top span').textContent = div.querySelector('span').innerHTML
};