const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


let command = process.argv[2]
if (command) {
  
  geocode(command, (err, {latitude,longitude,location}) => {

    if (err) {
      console.log(err)
    } else {
      forecast(latitude, longitude, (error, forcastData) => {
        if (error) {
          console.log('Error', error)

        } else {
          console.log(location)
          console.log(forcastData)

        }
      })
    }


  })
} else {
  console.log('Please provide a location')
}




