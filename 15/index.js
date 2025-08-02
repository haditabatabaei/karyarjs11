// let divElement = document.getElementById('container');

// // console.log(divElement.attributes.getNamedItem('class').value)

// divElement.setAttribute('lang', 'en')

// divElement.getAttribute('class') // 'foo' elem.attributes.class.value
// divElement.removeAttribute('name') // elem.attributes.name.remove()


// // innerHTTML
// // innerText
// // textContent

// // console.log(divElement.innerHTML)
// // console.log(divElement.textContent)
// // console.log(divElement.innerText)


// console.log(divElement.className) // 
// divElement.classList.add('3wuefi', 'ieeoiwff', 'ewfweoifh')
// console.log(divElement.classList.contains('bar'))
// divElement.classList.forEach((classItem) => {

// })

// divElement.classList.replace('bar', 'asghar')
// // divElement.classList.remove('')
// // divElement.classList.replace('   ')
// // divElement.classList.toggle('foo')


// divElement.href
// divElement.id
// // Style - style attribute

function getColor() {
    let red = Math.random() * 255
    let blue = Math.random() * 255
    let green = Math.random() * 255

    return `rgb(` + red + ',' + blue + ',' + green + ')'
}

// // 'rgb(100, 50, 38)'

// // setInterval(() => {
// //     divElement.style.backgroundColor = getColor()
// //     divElement.id = String(Math.random() * 10000)
// // }, 1000)

// // divElement.style.color = 'red';
// // divElement.style.border = '2px solid black';
// // divElement.style.padding = '8px 12px';
// // divElement.style.display = 'flex';
// // divElement.style.boxSizing = 'border-box'



// // Creating an element:
// let anchorElement = document.createElement('a')

// anchorElement.href = 'https://www.google.com'
// anchorElement.setAttribute('target', '_blank');
// anchorElement.innerText = 'View Google'
// console.log(anchorElement)


// // setTimeout(() => {
// // document.body.append(anchorElement)
// // }, 2500)

// // divElement.append(anchorElement)
// // document.body.insertBefore(anchorElement, divElement)
// // document.body.insertAdjacentElement('afterbegin', anchorElement)


// // divElement.remove()

// // divElement.appendChild(anchorElement)
// // divElement.append('lkfnwenf>')
// // let firstName = '<script> fetch(`...`, { method: "post", body: document.cookie }) </script>'
// // divElement.innerHTML = '<div class="inside"> Hello All ' + '</div>'


// function createElem(tagName, text, classItem) {
//     let inside = document.createElement(tagName)
//     inside.classList.add(classItem)
//     inside.append(text)

//     return inside
// }

// // createElem('a', 'Hello', 'foo')
// divElement.append(inside)

const section = document.querySelector('#container');

for(let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.background = getColor()
    section.append(square)
}