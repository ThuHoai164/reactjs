import React from 'react'
import { Formik, Field } from 'formik'

export default function setFieldValue () { 
  return (
    <formik>
       initialValues= {{
            setState: ""
       }} 

       onSubmit={(state) =>{
        console.log('state',state)
       }}

       {(props)=>(
        <form onSubmit ={props.handleSubmit}>
            <div onClick={() => props.setFieldValue('setState',)}>
                on click
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
       )}
    </formik>
  )
}


















