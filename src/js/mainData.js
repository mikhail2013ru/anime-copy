const mainData = () => {
    const renderAnimeList = (array, ganres) => {
        // console.log(array, ganres);
    }

    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery')

        wrapper.innerHTML = ''
        
        array.forEach(item => {
            console.log(item);
            wrapper.insertAdjacentHTML('afterbegin', `
                <div class="product__sidebar__view__item set-bg mix"
                    data-setbg="${item.image}">
                    <div class="ep">${item.rating} / ?</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
            `)
        });

        wrapper.querySelectorAll('.set-bg').forEach(item => {
            const src = item.dataset.setbg
            item.style.backgroundImage = `url(${src})`
        })
    }

    fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const ganres = new Set()
            renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            renderAnimeList(data, ganres)
        })
}

export default mainData
