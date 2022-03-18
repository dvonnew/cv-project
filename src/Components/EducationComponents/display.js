import React from "react";


const DeleteButton = (props) =>{
    const { id } = props

    return (
        <div className='delete-box'>
            <button className='delete-button' onClick={props.deleteInfo.bind(this, id)}> X </button>
        </div>
    )
}

const Display = (props) => {
    const {edu} = props

    return (
        <div className='education-info'>
            <div className='edu-info-box'>
                <h4 className='school'>{edu.school}</h4>
                <p className='study'>{edu.study}</p>
                <p className='year'>{edu.year}</p>
            </div>
            <div className='button-box'>
                {/* <button className='edit-button'> Edit </button> */}
                <DeleteButton id={edu.id} deleteInfo={props.deleteInfo}/>
            </div>
        </div>
    )
}

export default Display