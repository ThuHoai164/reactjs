import React from 'react';
import "./Add.css";
export default function Add(b) {
  return (
    <div 
      className='add-container' 
      // onClick={(event) => {
      //   if(event.target.className === "add-container")
      // }}
    >
      <div className='add'>
        <form >
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input 
                    name='name'
                    value = {b.addFormData.name}
                    onChange={b.handleAddFormChange}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='code'>Code</label>
                <input 
                    name='code'
                    value = {b.addFormData.code}
                    onChange={b.handleAddFormChange}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input 
                name='description'
                value={b.addFormData.description}
                onChange={b.handleAddFormChange}
                />
            </div>

            <button 
                type='submit'
                className='add-submit'
                onClick={b.handleAddFormSubmit}
            >
                Add
            </button>
        </form>
      </div>
    </div>
  )
}
