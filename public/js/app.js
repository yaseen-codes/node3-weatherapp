const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location)
    .then((response)=>response.json())
    .then(data2 => {
      if (data2.error) {
        messageOne.textContent = data2.error
        }
      else {
        messageOne.textContent = data2.loc;
        messageTwo.textContent = ' It is currently '+ data2.data.forecast.weather[0].description;
        messageThree.textContent = 'The temperature is ' + data2.data.forecast.main.temp
                      + 'C, Max Temp:'+ data2.data.forecast.main.temp_max +
                      'C, Min Temp: '+data2.data.forecast.main.temp_min+'C';
    }
  })
})
