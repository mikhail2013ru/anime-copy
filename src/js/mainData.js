fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })