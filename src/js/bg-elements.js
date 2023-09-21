const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')
    
    elements.forEach(item => {
        const src = item.dataset.setbg
        item.style.backgroundImage = `url(${src})`
    })
}

export default bgElements
