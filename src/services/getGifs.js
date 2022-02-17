const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';


export default function getGifs({keyword = 'love'} = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;


    return fetch(apiURL)
    .then( res => res.json() )
    .then(response => {
        const {data} = response;
        console.log(data);
        const gifs = data.map(image => {
            const { images, title } = image;
            const { url } = images.downsized_large
            return { title, url}
        });
        return gifs;
    })
    .catch(err => console.log(err));
        
}