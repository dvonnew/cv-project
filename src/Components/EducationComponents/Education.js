import React, { useState } from "react";
import EducationForm from './EducationComponentForm'
import Display from './display'
import Add from '../addButton'

const Education = () => {
    
    const [displayForm, setDisplay] = useState(false)
    let [education, addEdu] = useState([])

    const handleForm = () => {
        setDisplay(!displayForm)
    }

    const saveInfo = (info) => {
        const newEduInfo = [...education, info]
        addEdu(newEduInfo)
        handleForm()
    }

    const deleteInfo = (id) => {
        const newEduInfo = [...education]
        newEduInfo.splice(id, 1)
        addEdu(newEduInfo)
    }

    return(
        <div className='educationSection'>
            <h3>Education</h3>
            {education.map((edu) => (<Display edu={edu} key={edu.id} deleteInfo={deleteInfo} />))}
            <EducationForm displayForm={displayForm} saveInfo={saveInfo} handleForm={handleForm}/>
            <Add title='Education' handleForm={handleForm}/>
        </div>
    )
}

export default Education