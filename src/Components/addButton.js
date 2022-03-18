import React from 'react'

const Add = (props) =>{

    const {handleForm, title} = props
    return(
        <div className='addButtonBox'>
            <button className='addButton' onClick={handleForm}>+Add {title}</button>
        </div>
    )
}


export default Add