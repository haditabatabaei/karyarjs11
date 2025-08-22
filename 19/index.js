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
        if(ok) {
            
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

// low-level (سطح پایین) - low level api
// high-level (سطح بالا)

// زبان‌ برنامه‌نویسی سطح بالا 
// زبان برنامه نویسی سطح پایین

// C: low level language
// Python: High level language