import React, { useState } from "react";
import ExperienceForm from './JobComponentForm'
import Display from './display'
import Add from '../addButton'

const Experience = () => {

    const [displayForm, setDisplay] = useState(false)
    let [experience, addExp] = useState([])

    const handleForm = () => {
        setDisplay(!displayForm)
    }

    const saveInfo = (info) => {
        const newJobInfo = [...experience, info]
        addExp(newJobInfo)
        handleForm()
    }

    const deleteInfo = (id) => {
        const newJobInfo = [...experience]
        newJobInfo.splice(id, 1)
        addExp(newJobInfo)
    }

    return(
        <div className='experienceSection'>
            <h3>Experience</h3>
            {experience.map((job) => (<Display job={job} key={job.id} deleteInfo={deleteInfo} />))}
            <ExperienceForm displayForm={displayForm} saveInfo={saveInfo} handleForm={handleForm}/>
            <Add title='Experience' handleForm={handleForm} />
        </div>
    )
}
    

export default Experience