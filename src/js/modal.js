import { renderAnimeDetails } from "./categoriesData"

const modal = () => {
    const modal = document.querySelector('.search-model')
    const modalBtn = document.querySelector('.icon_search')
    const modalClose = document.querySelector('.search-close-switch')
    const searchInput = document.querySelector('#search-input')
    const wrapper = document.querySelector('.search-model-result')

    wrapper.style.width = '100%'
    wrapper.style.maxWidth = '500px'

    const debounce = (func, ms = 300) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {func.apply(this, args)}, ms)
        }
    }

    const searchDebounce = debounce((searchString) => {
        searchFunc(searchString)
        console.log(searchString);
    }, 1000)

    const renderFunc = (items) => {
        wrapper.innerHTML = ''
        
        items.forEach(item => {
            console.log(item.id);
            wrapper.insertAdjacentHTML('afterbegin', `
            <a class="p-2" href="/anime-details.html?itemId=${item.id}" target="_blank">${item.title}</a>
            `)
            let p2 = document.querySelector('.p-2')
            const itemId = new URLSearchParams(p2.search).get('itemId')
            renderAnimeDetails(items, [itemId])
        });
        

    }

    const searchFunc = (searchStr) => {
        fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const filteredData = data.filter(dataItem => {
                    return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) || dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
                })
                
                const result = filteredData.slice(0, 5)    
                renderFunc(result)

                // console.log(result);
            })
    }

    modalBtn.addEventListener('click', () => {
        modal.classList.add('search-model--active')
        searchInput.focus()
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('search-model--active')
        searchInput.value = ''
        wrapper.innerHTML = ''
    })

    searchInput.addEventListener('input', (e) => {
        // searchFunc(e.target.value)
        searchDebounce(e.target.value)
        // console.log(e.target.value);
    })
}

export default modal


