/*
    Network (شبکه) (any Device) - یخچال - جاروبرقی
    - نحوه‌ی ارتباط:
    - ارتباط با کابل (Wired) - DialUp - ADSL - VDSL - FibreOptic - ...
    - ارتباط بی‌سیم (Wireless) (امواج مغناطیسی) - WiFi, Bluetooth

    Node (هر دستگاهی که توی شکبه یه یک یا چند تا دستگاه دیگه وصله)

    IP Address (Internet Protocol Address) - IP v4
    0-255.0.0.0 : 
    2^32 ~ 1,000,000,000 تا‌آدرس می‌تونیم داشته باشیم

    10,000,000,000 (دیوایس)
    0.0.0.0
    255.255.255.255
    10.20.45.192

    Ipv6 (+ character)

    // Edge Nodes (Cloudflare Edge Nodes)

    Port (0-65540) 22 (SSH) 24 (FTP) 443 (HTTPS) 80 (HTTP) 43 44 (DNS) (1000) - 4000 - 8080 - 3000 - 3001 - 3002 - 3003
    
    IP:PORT, 56.71.23.5:80
    Domain (digikala.com - دامنه)

    8.8.8.8 (Google)
            Cloudflare
    1.1.1.1      
    DNS(Domain Name Service)
    Digikala.com? -> 56.71.23.5
    divar.ir? -> 10.20.50.12
    google.com? -> IP
    Domain -> IP

    (Local Ip) (External IP)


    HTTP (Hyper text transfer protocol) <- XHR (XML Http Request) - Fetch
    TCP (Transport ...)
    UDP (User Datagram protocol)
*/

// HTTP Request (درخواست)
// HTTP Response (پاسخ)



// URL (آدرس مقصد)
// Uniform/Universal Resource Locator





//
// http://foo.bar.com/alireza?name=hadi&age=12#success
// protocol: 'http'
// host: 'foo.bar.com'
// path: '/alireza'
// query: 'name=hadi&age=12'
// fragment: 'success'
// userInfo: ''


// ftp://username:password@server.com/files/download.jpg?time=20
// protocol: 'ftp'
// host: 'server.com'
// path: '/files/download.jpg'
// query: '?time=20'
// fragment: ''
// userInfo: 'username:password'


// foo.bar.com
// bar.com (domain)
// foo (sub-domain)

const url = new URL("http://foo.bar.com/alireza?name=hadi&age=12#success")
url.hash // fragment
url.host //
url.hostname //
url.pathname // path /alireza
url.search // query ?name=hadi&age=12 (www-x-url-form-data-encoded)
url.protocol // http

url.searchParams.get('name') // 'hadi'
// url.searchParams
console.log(url)

// 'name': 'hadi'
// 'age': '12'


// url-encoded-form-data
const myParams = new URLSearchParams('');
myParams.append('name', 'hadi')
myParams.append('skill', 'js')
let query = myParams.toString()
console.log({ query })


// ?addon_service_tags=IDENTITY_VERIFIED%2CSECURE_PAYMENT
let filters = {
    'has-photo': true,
    'has-video': true,
    'addon_service_tags': ['IDENTITY_VERIFIED', 'SECURE_PAYMENT']
}



// HTTP Request
    // URL DONE
    // Headers (سربرگ ها): جفت‌های کلید و ولیو هستن
    // Body (Request Body) هر نوع دیتایی می‌تونه باشه - بدنه‌ی درخواست
    // Method (Verb) - فعل - دستور - GET - POST - DELETE - PUT - PATCH - HEAD - OPTIONS

// HTTP Request
    // Method GET
    // URL: https://google.com
    // Headers: {....}
    // Body: null

// HTTP Response
    // Headers: {....}
    // Body: null
    // Status Code (
    // 101, 100, 200,
    // 301, 302, 307
    // 204, 400, 401, 
    // 403, 404, 405
    // 500, 502, 504,
    // 201

// fetch, xhr
// JSON (یک قالب استرینگ است.)
// 
// JavaScript Object Notation

let strData = "{\"name\": \"hadi\", \"skills\": [\"js\"] }"


JSON.parse(strData) // object
JSON.stringify({ name: 'neda' })
