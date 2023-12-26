const categoriesData = () => {
    const preloader = document.querySelector('.preloder')
    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')

        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="./categories.html?ganre=${ganre}">${ganre}</a>
                </li>
            `)            
        })

    }

    const renderCategoriesList = (array, ganreFilter, ganres) => {
        const wrapper = document.querySelector('.product-page')
        
        if (wrapper) {
            const colLg8 = document.querySelector('.product-page .col-lg-8')
            const newGanre = []
            if (ganreFilter) {
                newGanre.push(ganreFilter)   
                
                colLg8.textContent = ''
                renderAnimeList(array, newGanre)
            }
        }
    }

    const categories = (ganre) => {
        const wrapper = document.querySelector('.breadcrumb-option')
        if ((wrapper) && !wrapper.classList.contains('breadcrumb-categories')) {
            const breadcrumb = document.querySelector('.breadcrumb__links a')
            
            if (ganre === null) {
                breadcrumb.insertAdjacentHTML('afterend', `
                    <span>Categories</span>
                `)
            } else {                    
                breadcrumb.insertAdjacentHTML('afterend', `
                    <span>${ganre}</span>
                `)
            }               
        }
    }
    
    const animeDetails = (ganre) => {
        console.log(ganre);
        const wrapper = document.querySelector('.breadcrumb-categories')
        const breadcrumb = document.querySelector('.breadcrumb__links')
        if (wrapper) {
            console.log(ganre);
            breadcrumb.insertAdjacentHTML('afterbegin', `
                <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                <a href="./categories.html">Categories</a>
                <span>${ganre}</span>
            `)
        }

        // <a href="./categories.html">Categories</a>
        // <span>Romance</span>
    }

    const renderAnimeDetails = (array, itemId) => {
        const wrapper = document.querySelector('.anime-details')   
        console.log(array);     
        console.log(itemId);     
        
        if (wrapper) {
            const animeObj = array.find(item => item.id == itemId)
            const imageBlock = document.querySelector('.anime__details__pic')
            const viewsBlock = imageBlock.querySelector('.view')
            const titleBlock = document.querySelector('.anime__details__title h3')
            const subtitleBlock = document.querySelector('.anime__details__title span')
            const descriptionBlock = document.querySelector('.anime__details__text p')
            const widgetList = document.querySelectorAll('.anime__details__widget ul li')            
            
            if (animeObj) {
                console.log(animeObj);
                imageBlock.dataset.setbg = animeObj.image
                viewsBlock.insertAdjacentHTML('beforeend', `
                    <div><i class="fa fa-eye"></i> ${animeObj.views}</div>
                `)
    
                titleBlock.textContent = animeObj.title
                subtitleBlock.textContent = animeObj['original-title']
                descriptionBlock.textContent = animeObj.description
    
                widgetList[0].insertAdjacentHTML('beforeend', `
                    <span>Date aired:</span>${animeObj.date}
                `)
                widgetList[1].insertAdjacentHTML('beforeend', `
                    <span>Rating:</span> ${animeObj.rating}
                `)
                widgetList[2].insertAdjacentHTML('beforeend', `
                    <span>Genre:</span> ${animeObj.tags.join(", ")}
                `)
    
                document.querySelectorAll('.set-bg').forEach(item => {
                    const src = item.dataset.setbg
                    item.style.backgroundImage = `url(${src})`
                })
    
                // setTimeout(() => {
                //     preloader.classList.remove('active')
                // }, 500)
            } else {
                console.log("Аниме отсутствует!");
            }
        }
    }

    const renderAnimeList = (array, ganres) => {
        // console.log(array);
        console.log(ganres);
        const wrapper = document.querySelector('.product .col-lg-8')       
        if (wrapper) {    
            ganres.forEach((ganreItem) => {
                console.log(ganreItem);
                const productBlock = document.createElement('div')
                const listBlock = document.createElement('div')
                // const list = array.filter(item => item.ganre === ganreItem)
                const list = array.filter(item => item.tags.includes(ganreItem))
    
                listBlock.classList.add('row')
                productBlock.classList.add('mb-5')
                productBlock.insertAdjacentHTML('beforeend', `
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="section-title">
                                <h4>${ganreItem}</h4>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="btn__all">
                                <a href="/categories.html?ganre=${ganreItem}" class="primary-btn">View All <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                `)
    
                list.forEach(item => {
                    const tagsBlock = document.createElement('ul')
    
                    item.tags.forEach(tag => {
                        tagsBlock.insertAdjacentHTML('beforeend', `
                            <li>${tag}</li>
                        `)
                    })
    
                    listBlock.insertAdjacentHTML('beforeend', `
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                    <div class="ep">${item.rating} / 10</div>
                                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                                </div>
                                <div class="product__item__text">
                                    <ul>
                                        ${tagsBlock.outerHTML}
                                    </ul>
                                    <h5><a class="link" href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                                </div>
                            </div>
                        </div>
                    `)
                })
    
                productBlock.append(listBlock)
                wrapper.append(productBlock)
    
                wrapper.querySelectorAll('.set-bg').forEach(item => {
                    const src = item.dataset.setbg
                    item.style.backgroundImage = `url(${src})`
                })
            })

            setTimeout(() => {
                preloader.classList.remove('active')
            }, 500)
        }
    }

    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery')

        if (wrapper) {
            array.forEach(item => {
                wrapper.insertAdjacentHTML('beforeend', `
                    <div class="product__sidebar__view__item set-bg mix"
                        data-setbg="${item.image}">
                        <div class="ep">${item.rating} / ?</div>
                        <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                        <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                    </div>
                `)
            });
    
            wrapper.querySelectorAll('.set-bg').forEach(item => {
                const src = item.dataset.setbg
                item.style.backgroundImage = `url(${src})`
            })
        }
    }

    fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const ganres = new Set()
            const ganreParams = new URLSearchParams(window.location.search).get('ganre')
            const itemId = new URLSearchParams(window.location.search).get('itemId')
            // const categories = new URLSearchParams(window.location.search).get('ganre')

            console.log(ganreParams);

            data.forEach((item) => {
                ganres.add(item.ganre)
            })
            
            renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

            if (ganreParams || itemId) {
                renderAnimeDetails(data, [itemId]);
            } else {
                console.log('Аниме отсутствует!');
            }

            renderAnimeList(data, ganres)
            renderGanreList(ganres)
            categories(ganreParams)
            animeDetails([])
            renderCategoriesList(data, ganreParams, ganres)
        })

    return renderAnimeDetails
}

// export const { renderAnimeDetails } = categoriesData()
const renderAnimeDetails = categoriesData()
export { renderAnimeDetails }
export default categoriesData