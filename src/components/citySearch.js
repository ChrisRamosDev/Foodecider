import React from 'react'
import { Formik, Field, Form } from 'formik'

const CitySearch = () => {
  return (
    <>
      <Formik
        initialValues={{
          city: '',
        }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 500))
          console.log(value.city)
        }}
      >
        <Form>
          <Field id="city" name="city" placeholder="Enter city:" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default CitySearch
