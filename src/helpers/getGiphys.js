

export const getGiphy = async( category ) => {

    const url      =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=3Jd1GbD4mokIpS38hOHP1OcncbCH8TQr`;
    const resp     = await fetch( url );
    const { data } = await resp.json();

    const giphys = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return giphys;

    
}