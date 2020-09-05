import React from 'react'
import axios from 'axios'

const Geocode = ({ city }) => {
  console.log(city)

  const params = {
    params: {
      address: city,
      key: 'AIzaSyDSrVd2EG_8oitxQfzeyBO7t0vM6Ve7yZE',
    },
  }
  const handleRes = (response) => {
    var formattedAddress = response.data.results[0].formatted_address
    console.log(formattedAddress)
    return formattedAddress
  }
  const returnRes = (reponse) => {
    return (
      <ul>
        <li>response</li>
      </ul>
    )
  }

  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', params)
    .then((response) => handleRes(response))
    .then((response) => returnRes(response))
}

export default Geocode
