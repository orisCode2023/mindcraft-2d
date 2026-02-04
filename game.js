function createHtmlElement(tag) {
    return document.createElement(tag)
}
function addElementWithClass(tag, ...className) {
    const element = createHtmlElement(tag)
    element.classList.add(...className)
    return element
}

function addElementWithId(tag, tagId) {
    const element = createHtmlElement(tag)
    element.id = tagId
    return element
}
function addTextContent(tag, text) {
    tag.textContent = text
    return tag
}

function changePointer() {
    const tools = document.getElementById("tools")
    tools.addEventListener('click', (e) => {
        let url = e.target.src.replace(window.location.host, "").split('//')[1]
        document.body.style.cursor = `url("${url}"), auto`
    })
}

changePointer()
// document.getElementById("tools").addEventListener("click",e=>{
//     console.log(e.target.src)
// })