import React, { useState } from 'react'
import uniqid from "uniqid"

const EducationForm = (props) => {
    const initialState = {
        school: '',
        study: '',
        year: '',
        edit: false,
        id: uniqid()
    }

    const [info, setInfo] = useState(initialState)

    const resetState = () => {
        setInfo(initialState)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo((prevState) => ({...prevState, [name]: value }))
    }

    const handleSave = (e) => {
        e.preventDefault()
        props.saveInfo(info)
        resetState()
    }

    if (!props.displayForm) return null
    else{
        return(
            <div className='education-form-box'>
                <form>
                    <fieldset disabled={info.edit} className='education-form'>
                        <div className='info'>
                            <label>School:</label>
                            <input onChange={handleChange} 
                            className='school'
                            name='school'
                            type='text'
                            value={info.school}/>
                        </div>
                        <div className='info'>
                            <label>Study:</label>
                            <input onChange={handleChange}
                            className='study'
                            name='study'
                            type='text'
                            value={info.study}/>
                        </div>
                        <div className='info'>
                            <label>Graduation Year:</label>
                            <input onChange={handleChange}
                            className='year'
                            name='year'
                            type='text'
                            value={info.year}/>
                        </div>
                    </fieldset>
                    <div className='edu-button-Box'>
                        <button type='button' onClick={handleSave}>Save</button>
                        <button className="close-form-btn" onClick={props.handleForm}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EducationForm