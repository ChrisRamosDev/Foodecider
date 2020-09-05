import React, { useState } from 'react'

import { Formik, Field, Form } from 'formik'
import axios from 'axios'

const CitySearch = () => {
  const [city, setCity] = useState('orlando')
  const [newCity, setNewCity] = useState('')

  const params = {
    params: {
      address: city,
      key: process.env.REACT_APP_GOOGLE_API_KEY,
    },
  }

  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', params)
    .then(async (response) => {
      let formattedAddress = response.data.results[0].formatted_address
      await setNewCity(formattedAddress)
      console.log(formattedAddress)
      // var lat = response.data.results[0].geometry.location.lat
      // var lng = response.data.results[0].geometry.location.lng
    })
    .catch((err) => console.log(err))

  return (
    <>
      <Formik
        initialValues={{
          city: '',
        }}
        onSubmit={async (value) => {
          await new Promise((res) => setTimeout(res, 500))
          setCity(value.city)
        }}
      >
        <Form>
          <Field id="city" name="city" placeholder="Enter city:" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <p>You searched for {newCity}</p>
      {/* <p>
        That is here -> {lat} {lng}
      </p> */}
    </>
  )
}

export default CitySearch
