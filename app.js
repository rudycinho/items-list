var form   = document.getElementById('form-add')
var list   = document.getElementById('items')
var filter = document.getElementById('filter')

console.log(form)
console.log(list)
console.log(filter)

form.addEventListener('submit', addItem)
list.addEventListener('click' , deleteItem)
filter.addEventListener('keyup' , filterItems)

function addItem(e){
    e.preventDefault()
    let newItem = document.getElementById('item').value

    let li = document.createElement('li')
    li.className  = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    let buttonDel = document.createElement('button')
    buttonDel.className = 'btn btn-danger btn-sm float-right delete'
    buttonDel.appendChild(document.createTextNode('X'))

    li.appendChild(buttonDel)
    list.appendChild(li)

    document.getElementById('item').value = ""
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to remove the element?')){
            let li = e.target.parentElement
            list.removeChild(li)
        }
    }
}

function filterItems(e){
    let text  = e.target.value.toLowerCase()
    let items = list.getElementsByTagName('li')

    Array.from(items).forEach(function(item){
        let nameItem = item.firstChild.textContent
        if(nameItem.toLowerCase().indexOf(text)!=-1)
            item.style.display = 'block'
        else
            item.style.display = 'none'
    })
}   