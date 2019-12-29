const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=af7925896c9cb5829bf9ea3464d020d7&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}