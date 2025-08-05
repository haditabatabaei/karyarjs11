// Event
function getColor() {
    let red = Math.random() * 255
    let blue = Math.random() * 255
    let green = Math.random() * 255

    return `rgb(` + red + ',' + blue + ',' + green + ')'
}

const IDS = {
    BUTTON: '#button',
    CONTAINER: '#container',
    LINK: '#google-link',
    INNER_CONTAINER: '#inner-container',
    FORM: 'register',
    FIRST_NAME_INPUT: ''
}

const NAMES = {
    FORM: 'register',
    FIRST_NAME_INPUT: 'register-first-name'
}

const buttonElem = document.querySelector(IDS.BUTTON)
const containerElem = document.querySelector(IDS.CONTAINER)
const linkElem = document.querySelector(IDS.LINK)
const innerContainerElem = document.querySelector(IDS.INNER_CONTAINER)

console.dir(buttonElem)

// EventName: 'click', 'mouseenter', 'change', 'keydown', .... 
// EventHandler -> Callback: function
// Listener

// Phase 1: Capturing 
// Phase 2: Targeting (At Target)
// Phase 3: Bubbling // Bubble (حباب)

// containerElem.addEventListener('click', (event) => {
//     console.log('Container Clicked')
// })

// function handleClick(event) {
//     console.log(event)
//     console.log('Button Clicked')

//     buttonElem.removeEventListener('click', handleClick)
// }

function handleClick(event) {
    // console.log(event.tagName)
    const tagName = event.target.tagName; // "button" | "section"
    const targetId = event.target.id


    if(targetId.startsWith('btn')) {
        const form = document.forms.register;

        const skills = Array.from(form.skills)
            .filter(({ checked }) => checked)
            .map(({ value }) => value )

        const cities = Array.from(
            form.city.selectedOptions
        ).map(({ value }) => value)

        console.log({ cities, skills })
        // document.body.style.background = getColor()
        // console.log('Button With ID: ' + targetId + ' Clicked!.')
    } else {
        document.body.style.background = ''
    }
}

containerElem.addEventListener('click', handleClick)

for(let i = 0; i < 200; i++) {
    const btn = document.createElement('button');
    btn.id = 'btn' + i;
    btn.innerText = 'Button ' + (i + 1);

    // btn.addEventListener('click', handleClick)
    containerElem.append(btn)
}


// const form = document.forms[NAMES.FORM] 
// console.log(document.forms.register['register-first-name'])

// console.dir(form)


// console.log(form.skills)
// document.forms['register']
// Event Delegation
// Delegate (تفویض)

// buttonElem.addEventListener('click', handleClick)


// buttonElem.addEventListener('mouseenter', () => {
//     console.log('Mouse Entered')
// })

// buttonElem.addEventListener('', () => {
//     console.log('Mouse Over')
// })


// addEventListener()


// Form


