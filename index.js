import './index.sass'

const burger = document.querySelector('.burger')

const nav = document.querySelector('.menu__list')

const handlerBurgerClick = () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        burger.classList.remove('open')
    } else {
        nav.classList.add('active')
        burger.classList.add('open')
    }
}

burger.addEventListener("click", handlerBurgerClick)