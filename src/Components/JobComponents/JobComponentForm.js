import React, { useState } from 'react'
import uniqid from "uniqid"

const ExperienceForm = (props) => {
    
    const initialState = {
        company: '',
        title:'',
        description: '',
        from: '',
        until: '',
        id: uniqid(),
        edit: false
    }

    const [info, setInfo] = useState(initialState)

    const resetState = () => {
        setInfo(initialState)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInfo((prevState) => ({...prevState, [name]: value}))
    }

    const handleSave = (e) => {
        e.preventDefault()
        props.saveInfo(info)
        console.log(info.id)
        resetState()
    }

    if (!props.displayForm) return null
        else{
            return (      
                <div className='job-form-box'>
                    <form>
                        <fieldset disabled={info.edit} className='job-form'>
                            <div className='comp-title'>
                                <div className='info'>
                                    <label className='info'>Company</label>
                                    <input onChange={handleChange}
                                    className='company'
                                    name='company'
                                    type='text'
                                    value={info.company}/>
                                </div>
                                <div className='info'>
                                    <label className='info'>Title</label>
                                    <input onChange={handleChange}
                                    className='title'
                                    name='title'
                                    type='text'
                                    value={info.title}/>
                                </div>
                            </div>
                            <div className='info'>
                                <label className='info'>Job Description</label>
                                <textarea onChange={handleChange}
                                className='description-info'
                                name='description'
                                type='text'
                                value={info.description}
                                rows='10'/>
                            </div>
                            <div className='period'>
                                <div className='info'>
                                    <label className='info'>From</label>
                                    <input onChange={handleChange}
                                    className='from'
                                    name='from'
                                    type='date'
                                    value={info.from}/>
                                </div>
                                <div className='info'>
                                    <label className='info'>Until</label>
                                    <input onChange={handleChange}
                                    className='until'
                                    name='until'
                                    type='date'
                                    value={info.until}/>
                                </div>
                            </div>
                        </fieldset>
                        <div className='job-button-box'>
                            <button type='button' onClick={handleSave}>Save</button>
                            <button className="close-form-btn" onClick={props.handleForm}>Cancel</button>
                            {/* <button type='button' onClick={toggleEdit}>Edit</button> */}
                        </div>
                    </form>
                </div>
            )
        }
        
}

export default ExperienceForm