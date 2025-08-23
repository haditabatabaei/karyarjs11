const buttonElem = document.querySelector('#req ')

let list = []
function handleClick() {
    console.log('Clicked')

    // sendRequestXHR();
    sendRequestWithFetch();
}

let isLoading = false;
let errorMessage = ''
function sendRequestWithFetch() {
    isLoading = true;
    errorMessage = '';

    fetch(
        'https://httpbin.io/json',
        {
            headers: {
                'My-Custom-Header': 'Hadi'
            },
            method: 'get'
        }
    )
        .then((response) => {
            console.log(response)
            const {
                status,
                ok,
                headers,
            } = response

            const length = headers.get('content-length')
            const keys = Array.from(headers.keys());
            console.log({ status, length, keys, ok })
            /*
                resolved - ok true
                resolved - ok false
                reject
    
                error: reject | resolved - ok false
            */
            response.json()
                .then((obj) => {
                    console.log(obj)
                })
            if (ok) {

            } else {
                errorMessage = 'یک ارور خاص'
            }
        })
        .catch((error) => {
            errorMessage = 'در ارتباط با سرور مشکلی پیش آمد'
            console.log(error)
        })
        .finally(() => {
            isLoading = false
        })
}


function sendRequestXHR() {
    const request = new XMLHttpRequest()

    request.open('GET', 'https://httpbin.io/status/404');
    request.setRequestHeader('My-Custom-Header', 'Hadi')

    request.send('salam')

    request.addEventListener('load', () => {
        console.log(request)

        const response = request.response;
        console.log(response)

        if (request.status === 200) {
            const obj = JSON.parse(response)
            console.log(obj)
        } else {
            // 
            console.log(request.status, request.statusText)
        }
    })

    request.addEventListener('error', () => {
        console.log('Errored')
    })
}

buttonElem.addEventListener('click', handleClick)




const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolved after 1 second.')
    }, 1000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolved after 2 seconds.')
    }, 2000)
})

const promise3 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('Rejected after 0.5 seconds.'))
    }, 500)
})

const newPromise = Promise.all([promise1, promise3, promise2])

// const start = performance.now();
// newPromise
// .then(([resolveValue1, resolveValue2]) => {

//     console.log({ resolveValue1, resolveValue2 })
// })
// .catch((reason) => {
//     const end = performance.now();

//     console.log({ message: reason.message })

//     console.log((end - start) / 1000)
// })


// Promise.allSettled([promise1, promise2, promise3])
//     .then((responses) => {
//         const successResponses = responses.filter(({ status }) => status === 'fulfilled')
//         console.log(responses)
//         console.log(successResponses)
//     })


// Promise.race([promise1, promise2, promise3])
//     .then((value) => {
//         console.log({ value })
//     })
//     .catch((reason) => {
//         console.log(reason.message)
//     })

// Promise.any([promise3, promise3, promise3])
//     .then((response) => {
//         console.log(response)
//     }).catch(reasons => {
//         console.log(reasons)
//     })

// Promise.resolve("ewifjwiohj")
// Promise.reject(new Error('folan'))

// const prom = new Promise(
//     (resolve, reject) => {
//         if(Math.random() > 0.5) {
//             resolve()
//         } else {
//             reject()
//         }
//     }
// )


// Promise
//     .then(() => Promise.reject('welgkjewg'))
//     Promise.reject('egjwjg')
//     .then(('wejgwjegpgj'))
//     .then()
//     .catch((e) => {

//     })


// Some of the code below is removed due to make students practice themselves
function http(url, config) {
    return new Promise((resolve, reject) => {
        fetch(url, config)
            .then((response) => {
                response.json()
                    .then((responseBody) => {
                        if (response.ok) {
                            resolve({ status: response.status, data: responseBody, headers: response.headers })
                        } else {
                            const er = new Error('error message')
                            er.status = response.status;
                            er.headers = response.headers;

                            reject(er)
                        }
                    })
                    .catch((error) => {
                        reject(error)
                    })

            })
            .catch((error) => {
                reject(error)
            })
    })
}


// http('http:/pewjgewg') // Reject: Network Error, Response 400, 500, JSON error
//     .then((response) => {
//         const { status, data, headers } = response;
//         switch (status) {
//             case 200:
//             case 201:
//             case 204:
//             // 
//             case 302:
//             case 301:
//             case 307:
//             //
//             default:
//             //
//         }
//     })
//     .catch(error => {
//         const { status, message, headers } = error

//         switch (status) {
//             case 400:
//             //
//             case 404:
//             //
//             case 502:
//             case 500:
//             case 503:
//             case 504:
//             //
//             default:
//             //
//         }
//     })

// http('https://httpbin.io/headers', { method: 'GET' })
//     .then((response) => {
//         console.log(response)
//     })

// http('https://httpbin.io/base64/encode/hadi', { method: 'GET'})
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

// http('https://httpbin.io/status/404', { method: 'GET' })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })


// http('https://httpbin.io/post', { method: 'GET' })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })

// http('https://httpbin.io/image/jpeg', { method: 'GET' })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })

let registerForm = {
    firstName: 'Hadi',
    lastName: 'Tabatabaei',
    skills: ['js', 'ts'],
    hasPermission: true,
}

// http('https://httpbin.io/post', { method: 'POST', body: JSON.stringify(registerForm) })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })

// http('https://httpbin.io/post', { method: 'POST', headers: { 'Content-Type': 'application/json' },  body: JSON.stringify(registerForm) })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })

// http('https://httpbin.io/html/schema', { method: 'GET' })
//     .then((response) => {
//         console.log(response)
//         document.body.innerHTML = response.data
//     })
//     .catch(error => {
//         console.log(error.status)
//         console.log(error.message)
//     })

// // arbitrary - دلخواه
// // URL Parameters
// '/base64/encode/:value'

// let person = { name: "hadi" }

// JSON.parse('wpgijgeg')
// JSON.parse('{ name: "hadi" }')