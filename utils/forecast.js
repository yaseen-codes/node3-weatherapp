const request = require('request')


const forecast = (lat, lon, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+lon+'&appid=4cacabdde6629e61f1c941ec2e25a486'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.cod!==200) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                forecast: response.body.weather[0].description
            })
        }
    })
}

module.exports = forecast
