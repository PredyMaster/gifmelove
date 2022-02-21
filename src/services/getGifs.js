const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';


export default function getGifs({limit = 20, keyword = 'love', page = 0} = {}) {

    let offsetCalc = page*limit;
    //console.log({offsetCalc});
    console.log("getGifs");

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offsetCalc}&rating=G&lang=en`;


    return fetch(apiURL)
    .then( res => res.json() )
    .then(response => {
        const {data} = response;
        //console.log(data);
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_large
            return { title, url, id}
        });
        return gifs;
    })
    .catch(err => console.log(err));
        
}