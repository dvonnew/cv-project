import React, {Component} from 'react'
import Personal from './GeneralComponents/GeneralComponent'
import Education from './EducationComponents/Education'
import Experience from './JobComponents/job'

class CV extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    createCV = () =>{
        return(
            <div className='CVpersonal'>
                <p>{Personal.state.first}</p>
            </div>
        )
    }

    render(){
        return(
            <div className='background'>
                <div className='CV'>
                    <Personal/>
                    <Education/>        
                    <Experience/>
                    <div className='submitBox'>
                        <button type='submit' className='submitForm' onSubmit={this.createCV}>Submit CV</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CV