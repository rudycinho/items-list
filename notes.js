console.log("Anatomy HTML")

console.log("------------------ URL")
console.log(document.URL)       // print URL
console.log("------------------ Title")
console.log(document.title)     // print title
console.log("------------------ Head")
console.log(document.head)      // print head
console.log("------------------ Body")
console.log(document.body)      // print body
console.log("------------------ Lines")
console.log(document.all)       // print all lines
console.log("------------------ Line 10")
console.log(document.all[10])   // print line 10
console.log("------------------ Forms")
console.log(document.forms)     // print forms
console.log("------------------ Form 0")
console.log(document.forms[0])  // print form 0
console.log("------------------ Header Title")
console.log(document.getElementById('header-title'))
console.log("------------------ Main Header")
console.log(document.getElementById('main-header'))

// getElementsById
console.log('--------------GET-ELEMENTS-BY-ID--------------')
document.getElementById('header-title').textContent='Hello'
document.getElementById('header-title').innerText  ='Good Bye'
document.getElementById('header-title').innerHTML  ='<h3>Tests</h3>'

// getElementsByClassName
console.log('--------------GET-ELEMENTS-BY-CLASS-NAME--------------')
document.getElementsByClassName('list-group-item')
document.getElementsByClassName('list-group-item')[2].textContent= 'Test'

// getElementsByTagName
console.log('--------------GET-ELEMENTS-BY-TAG-NAME--------------')
document.getElementsByTagName('li')[1].textContent = 'Test 02'

// querySelector
console.log('--------------QUERY-SELECTOR--------------')
// id
document.querySelector('#main-header').style.borderBottom = 'solid 4px #ccc'
// tags
document.querySelector('input').value='Hello World'
document.querySelector('input[type="submit"]').value="Send"
// class
document.querySelector('.list-group-item').style.color='red'

// querySelectorAll
document.querySelectorAll('.list-group-item').forEach(element => {
    element.style.color = 'green'
});

document.querySelectorAll('.title')[0].textContent = 'Test'

document.querySelectorAll('li:nth-child(odd)').forEach(element => element.style.backgroundColor = '#ccc')
document.querySelectorAll('li:nth-child(even)').forEach(element => element.style.backgroundColor = '#47c')

//node elements
console.log('--------------NODE-ELEMENTS--------------')
document.querySelector('#items').parentNode.style.backgroundColor='#f5f5f5'

console.log(document.querySelector('#items'))
console.log(document.querySelector('#items').parentNode)
console.log(document.querySelector('#items').parentNode.parentNode)
console.log(document.querySelector('#items').parentNode.parentNode.parentNode)

//parent elements
console.log('--------------PARENTS-ELEMENTS--------------')
console.log(document.querySelector('#items'))
console.log(document.querySelector('#items').parentElement)
console.log(document.querySelector('#items').parentElement.parentElement)
console.log(document.querySelector('#items').parentElement.parentElement.parentElement)

document.querySelector('#items').parentElement.parentElement.style.background='black'

//child nodes
console.log('--------------CHILD-ELEMENTS--------------')

//  childNodes
console.log(document.querySelector('#items').childNodes)
//  chilldren
console.log(document.querySelector('#items').children)    
//  firstChild
console.log(document.querySelector('#items').firstChild)    
console.log(document.querySelector('#items').firstElementChild) 
document.querySelector('#items').firstElementChild.textContent = 'FIRST TEXT'
//  lastChild
console.log(document.querySelector('#items').lastChild)    
console.log(document.querySelector('#items').lastElementChild) 
document.querySelector('#items').lastElementChild.textContent = 'LAST TEXT'

//child sibling
console.log('--------------SIBLING-ELEMENTS--------------')

//previousSibling
console.log(document.querySelector('#items').previousSibling)
//previousElementSibling
console.log(document.querySelector('#items').previousElementSibling)
//nextSibling
console.log(document.querySelector('#items').nextSibling)
//nextElementSibling
console.log(document.querySelector('#items').nextElementSibling)

console.log('--------------CREATE--------------')

//create elements
var newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id        = 'div-hello'
newDiv.setAttribute('title','Hello World')
console.log(newDiv)

//create text node
var newNodeText = document.createTextNode('Hello World')
console.log(newNodeText)

//append
newDiv.appendChild(newNodeText)
console.log(newDiv)

var contenedor = document.querySelector('header .container')
console.log(contenedor)

var h1 = document.querySelector('h1')
console.log(h1)

contenedor.insertBefore(newDiv,h1)

console.log('--------------ADD-EVENTS--------------')
//add events
document.getElementById('button').addEventListener(
    'click',
    function(){
        console.log('You Clicked')
    }
)