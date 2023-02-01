window.onscroll = () => scrollHeader()

const scrollHeader = () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        document.querySelector('header').classList.add('header-fixed')
    } else {
        document.querySelector('header').classList.remove('header-fixed')
    }
}



