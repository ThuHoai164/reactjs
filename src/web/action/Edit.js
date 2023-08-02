import React from 'react'

export default function Edit(p) {
  return (
    <tr>
        <td>
            <input
                type='text'
                required = 'required'
                placeholder='Enter a name...'
                name='name'
                value={p.editFormData.name}
                onChange={p.handleEditFormChange}
                // onChangeCapture={handleEditFormChange}
            >
            </input>
        </td>
        <td>
            <input
                type='text'
                required = 'required'
                placeholder='Enter an code...'
                name='code'
                value={p.editFormData.code}
                onChange={p.handleEditFormChange}
                // onChangeCapture={handleEditFormChange}
            >
            </input>
        </td>
            
        <td>
            <input
                type='text'
                required = 'required'
                placeholder='Enter an description...'
                name='description'
                value={p.editFormData.description}
                onChange={p.handleEditFormChange}
                
            >
            </input>
        </td>

        <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={p.handleCacelClick}>Cancel</button>
        </td>
    </tr>
  )
}
