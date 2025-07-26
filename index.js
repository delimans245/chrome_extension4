let inputEl = document.getElementById('input-el')
let saveEl = document.getElementById('save-el')
let deleteEl = document.getElementById('delete-el')
let tabEl = document.getElementById('tab-el')
let listEl = document.getElementById('list-el')
let links = []


saveEl.addEventListener('click', function() {
    let inputValue = inputEl.value
    if (inputValue) {
        links.push(inputValue)
        inputEl.value = ''
        renderLinks()
    }
})

function renderLinks() {
    listEl.innerHTML = ''
    for (let i = 0; i < links.length; i++) {
        listEl.innerHTML += `
            <li>
                <a href="${links[i]}" target="_blank">
                    ${links[i]}
                </a>
            </li>`
    }
}