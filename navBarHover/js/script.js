let $ = document

let home = $.querySelector('#home')
let shop = $.querySelector('#shop')
let basket = $.querySelector('#basket')
let about = $.querySelector('#about')
let contact = $.querySelector('#contact')
let animElem = $.querySelector('.anim')
let links = $.querySelectorAll('a')
home.addEventListener('mouseenter', () => {
        animElem.classList.remove('disappear')
        animElem.style.width = '78px'
	animElem.style.marginRight = '0px'
})

shop.addEventListener('mouseenter', () => {
        animElem.classList.remove('disappear')
        animElem.style.width = '109px'
	animElem.style.marginRight = '91px'
})

basket.addEventListener('mouseenter', () => {
        animElem.classList.remove('disappear')
        animElem.style.width = '121px'
	animElem.style.marginRight = '217px'
})

about.addEventListener('mouseenter', () => {
        animElem.classList.remove('disappear')
        animElem.style.width = '109px'
	animElem.style.marginRight = '351px'
})

contact.addEventListener('mouseenter', () => {
        animElem.classList.remove('disappear')
        animElem.style.width = '125px'
	animElem.style.marginRight = '476px'
})
links.forEach(link =>
    {link.addEventListener('mouseleave', () => {
        animElem.classList.add('disappear')
    })}
)