const topBtn = document.querySelector('#scrollToTopButton')

topBtn.addEventListener('click', (e) => {
    e.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})