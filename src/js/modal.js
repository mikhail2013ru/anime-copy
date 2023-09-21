const modal = () => {
    const modal = document.querySelector('.search-model')
    const modalBtn = document.querySelector('.icon_search')
    const modalClose = document.querySelector('.search-close-switch')
    
    modalBtn.addEventListener('click', () => {
        modal.classList.add('search-model--active')
    })
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('search-model--active')
    })
}

export default modal


