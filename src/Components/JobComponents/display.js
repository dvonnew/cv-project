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
    const {job, deleteInfo} = props

    return (
        <div className='job-info'>
            <div className='job-info-box'>
                <div className='job-header'>
                    <div className='job-detail'>
                        <h3 className='company'>{job.company}</h3>
                        <p className='title'>{job.title}</p>
                    </div>
                    <div className='work-dates'>
                        <p className='from'>{job.from} - {job.until}</p>
                    </div>
                </div>
                <p className='description'>{job.description}</p>
            </div>
            <div className='button-box'>
                {/* <button className='edit-button'> Edit </button> */}
                <DeleteButton id={job.id} deleteInfo={deleteInfo}/>
            </div>
        </div>
    )
}

export default Display