import React,{Fragment, useState} from "react";
import { useTable } from "react-table";  
import "./table.css"
import Column from "./column";
import data1 from "./data.json"
import Edit from "./action/Edit";
import './action/Add.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'

function CountryData() {
    
  const [contact, setContacts] = useState(data1);

  // edit 
  const [editContactCode, setEditContacCode] = useState(null);
  
  const [editFormData, setEditFormData] = useState({
    name: "",
    code : "",
    description:""
  })
  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fielName = event.target.getAttribute("name");
    const fielValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fielName] = fielValue;

    setEditFormData(newFormData);
  }

 

      // save
  const handleEditFormSubmit = (event) =>{
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      code: editFormData.code,
      description: editFormData.description
    }

    const newContacts = [...contact];

    const index = contact.findIndex((contact) => contact.code === editContactCode);
    newContacts[index] = editedContact;

    setContacts(newContacts);
  }

  // Delete
  const handleDeleteClick = (contactcode) => {
    const newContacts = [...contact];

    const index = contact.findIndex((contact) => contact.code === editContactCode);
    newContacts.splice(index, 1);

    setContacts(newContacts);
  }

  // click 
  const handleEditClick = (event,contact) => {
    event.preventDefault();
    setEditContacCode(contact.code);
   
    // edit
    const formValues = {
      name: contact.name,
      code: contact.code,
      description: contact.description
    }

    setEditFormData(formValues); 
  }

  // Cancel
  const handleCancelClick =() => {
    setEditContacCode(null);
  }


   // add
   const [addFormData, setAddFormData] = useState({
  
    name: "",
    code : "",
    description:""
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fielName = event.target.getAttribute("name");
    const fielValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fielName] = fielValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const addedContact = {
      name: addFormData.name,
      code: addFormData.code,
      description: addFormData.description
    }

    const newContacts = [...contact, addedContact];

    setContacts(newContacts);
  }

  // ktra du lieu trong form 
  const formik = useFormik({
    initialValues:{
      name:'',
      code:'',
      description:''
    },

    valitdationSchema: Yup.object({
      name:Yup.string()
      .min(10,"Your name must be at least 10 characters!")
      .max(25,"Your name must be under 25 characters!")
      .required("You must fill in this section!"),
      
      code:Yup.string().required("You must fill in this section!"),

      description:Yup.string().required("You must fill in this section!"),

    }),

    onSubmit: (values) =>{
      console.log(values)
    }
  })
  
  return(
    <div className="container">
      <form onSubmit={formik.handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {
              contact.map((contact) => (
                <Fragment>
                  {editContactCode === contact.code ? (
                    <Edit 
                      editFormData = {editFormData}
                      handleEditFormChange = {handleEditFormChange}
                      handleCancelClick = {handleCancelClick}
                    />
                  ): (
                    <Column 
                      contact={contact} 
                      handleEditClick = {handleEditClick}
                      handleDeleteClick = {handleDeleteClick} 
                    />
                  )} 
                </Fragment>
                
              ))
              
            }
          </tbody>
        </table>
      </form>
      
     
    {/* Add */}

    <div 
      className='add-container' 
    >
      <div className='add'>
        <form onSubmit ={handleAddFormSubmit} >
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  required = 'required'
                  placeholder='Enter a name...'
                  name='name'
                  value={addFormData.name}
                  onChange ={handleAddFormChange }
                ></input>
                {formik.errors.name && formik.touched.name && (
                <p>{formik.errors.name}</p>
                )}
            </div>

            <div className='form-group'>
                <label htmlFor='code'>Code:</label>
                <input
                  type='text'
                  required = 'required'
                  placeholder='Enter a code...'
                  name='code'
                  value={addFormData.code}
                  onChange ={handleAddFormChange }
                >
                </input>
                {formik.errors.code && formik.touched.code && (
                <p>{formik.errors.code}</p>
                )}
            </div>

            <div className='form-group'>
                <label htmlFor='description'>Description:</label>
                <input
                  type='text'
                  required = 'required'
                  placeholder='Enter a description...'
                  name='description'
                  value={addFormData.description}
                  onChange ={handleAddFormChange }
                >
                </input>
                {formik.errors.description && formik.touched.descripton && (
                <p>{formik.errors.description}</p>
                )}
            </div>

            <button 
                type='submit'
                className='add-submit'
                value = 'Submit form '
            >
                Add
            </button>
        </form>
      </div>
    </div>
       
    </div>
  )
}
 

export default CountryData;