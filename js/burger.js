const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')
const navItem = document.querySelectorAll('.nav__item')

// console.log(navItem);

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})

const removeClasses = () => {
    burger.classList.remove('show-mobile-btn')
    nav.classList.remove('show-nav')
    backdrop.classList.remove('show-backdrop')
}

backdrop.addEventListener('click', () => {
    removeClasses()
})

navItem.forEach(el => {
    el.addEventListener('click', () => {
        removeClasses()
    })
})

