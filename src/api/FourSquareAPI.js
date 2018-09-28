const api = "https://api.foursquare.com/v2/venues/explore?";
const clientId = "2DOVXTTK4QSNGJZJ203I0XTJZ5U01YZWAJGKAXO2GU00TP2U";
const clientSecret = "2RXJP4WVNN24ZCSWUFBWUPELCEWL3YGAWBF51JXVMZGGPBPX";

export const getPlace = (query) => 
    fetch(`${api}client_id=${clientId}&client_secret=${clientSecret}&v=20180323&limit=10&ll=-19.8729671,-43.9394973&query=${query}`)
    .then( data => data.json())
    .then( res => res.response)
    .catch( () => { error: true; })