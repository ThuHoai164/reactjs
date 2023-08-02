import React,{Fragment, useState} from "react";
import { useTable } from "react-table";  
import "./table.css"
import Column from "./column";
import data1 from "./data.json"
import Edit from "./action/Edit";
import Add from "./action/Add";
import './action/Add.css';

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
  
  return(
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
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
      
      <form onSubmit={handleAddFormSubmit}>
        <Add
          contact = {contact} 
          addFormData = {addFormData}
          handleAddFormChange = {handleAddFormChange}
        />
      </form>
       
    </div>
  )
}
 

export default CountryData;