const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//my work:

//header
const navItems = document.querySelectorAll('a')
navItems.forEach(
  (item, i) => {
    item.textContent = siteContent["nav"][`nav-item-${i+1}`]
    
    //navigation text -> green
    item.style.color = 'green'
  }
)

//adding to the nav bar
const parentElement = document.querySelector("nav")
const newLinkFront = document.createElement('a')
newLinkFront.textContent = "new-front"
const newLinkBack = document.createElement('a')
newLinkBack.textContent = "new-back"


parentElement.prepend(newLinkFront)
parentElement.appendChild(newLinkBack)

//top section
const mainText = document.querySelector('h1')
mainText.textContent = siteContent["cta"]["h1"]

const button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

const codeImg = document.querySelector('#cta-img')
codeImg.setAttribute('src', siteContent["cta"]["img-src"])

//main section
const headings = document.querySelectorAll(".main-content h4")
headings[0].textContent = siteContent["main-content"]["features-h4"]
headings[1].textContent = siteContent["main-content"]["about-h4"]
headings[2].textContent = siteContent["main-content"]["services-h4"]
headings[3].textContent = siteContent["main-content"]["product-h4"]
headings[4].textContent = siteContent["main-content"]["vision-h4"]

const contents = document.querySelectorAll(".main-content p")
contents[0].textContent = siteContent["main-content"]["features-content"]
contents[1].textContent = siteContent["main-content"]["about-content"]
contents[2].textContent = siteContent["main-content"]["services-content"]
contents[3].textContent = siteContent["main-content"]["product-content"]
contents[4].textContent = siteContent["main-content"]["vision-content"]

const midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//contact section
const contactHeading = document.querySelector(".contact h4")
contactHeading.textContent = siteContent["contact"]["contact-h4"]

const contactContent = document.querySelectorAll(".contact p")
contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

//footer
const footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]




