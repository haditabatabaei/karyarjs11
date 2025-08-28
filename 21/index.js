// DOM api (document)
// XHR api (XMLHttpRequest)
// Fetch api (fetch)
// CSSOM api (CSS Object Model) .style

// LocalStorage api (localStorage)
// Cookie api (document.cookie)


// Local Storage - object localStorage
// Storage: 5MB
// Structure: key: string value: string
// Persistency: Never (except Clear Cache - JS Source Code)
// فقط در این دستگاه کاربر ذخیره می‌شه و به شکل خودکار در درخواست‌های شبکه http ارسال نمی‌شه.

let person = {
    firstName: 'Hadi',
    lastName: 'Tabatabaei'
}

'query' , 'person', 'firstName=Hadi&lastName=Tabatabaei'
localStorage.clear()

localStorage.setItem('person', JSON.stringify(person))

console.log(JSON.parse(localStorage.getItem('person'))) // 'Hadi' | null

localStorage.removeItem('person')

// Draft - نسخه‌ی پیشنویس



const storage = {
    set(key, value) {
        let finalValue = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, finalValue)
    },
    get(key) {
        const stringValue = localStorage.getItem(key);
        try {   
            const parsedValue = JSON.parse(stringValue);
            
            return parsedValue
        } catch (e) {
            return stringValue
        }
    }
}

storage.set('person', { name: 'Hadi' })
storage.set('name', 'ali');
storage.set('name', 'neda')
storage.get('person') // { name: 'Hadi' }
storage.get('neda') // 'neda'

// Cookie (Storage) - document.cookie
// Storage: ~30 cookie each max 4KB
// Structure: key: string value: string | option: Expires(MaxAge) | Domain | HttpOnly | Secure
// Persistency: Custom based on MaxAge(Expires)

// ویژگی اصلی کوکی: 
// ۱ - مرورگر به طور خودکار، کوکی‌ها را در درخواست‌های اچ تی تی پی به عنوان هدر Cookie برای مقصد ارسال می کند.
// ۲ - سرور مقصد، می تواند در قالب هدر Set-Cookie، به مرورگر دستور دهد که کوکی‌های داخل Set-Cookie در استورج ذخیره شوند.

// HttpOnly:
// کوکی فقط و فقط توسط مرورگر در درخواست‌های http تزریق می‌شود و از طریق جاوااسکریپت در دسترس نیست

console.log({ cookie: document.cookie })

// form-data-url-encoded ~ querystring
document.cookie = 'firstName=hadi; HttpOnly'



// Cache: اگر پردازشی رو قبلا انجام داده‌ام، و نتیجه‌اش رو می‌دونم، دیگه پردازش رو انجام نمی دم
// ذخیره کردن نتیجه
