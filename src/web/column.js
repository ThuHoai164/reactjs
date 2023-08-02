import React,{useState} from 'react'
// import data1 from './data.json'

export default function column(a) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [contact, setContacts] = useState(data1);
  return (
        // contact.map((contacts)=>
        <tr>
            <td>{a.contact.name}</td>
            <td>{a.contact.code}</td>
            <td>{a.contact.description}</td> 
            {/* <td>{p.contact.action}</td> */}
             <td>
                <button 
                    type='button' 
                    onClick={(event) => a.handleEditClick(event, a.contact)}
                >
                    Edit
                </button>

                <button 
                    type='button' 
                    onClick={() => a.handleDeleteClick(a.contactcode)}
                >
                    Delete
                </button>
            </td>
        </tr>
        )
//   )
}
