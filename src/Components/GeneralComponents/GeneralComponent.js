import React, { Component } from 'react'

class Personal extends Component {
    constructor(){
        super()

        this.state = {
            first: 'First Name',
            last: 'Last Name',
            email: 'Email',
            tel: 'Phone Number',
            address: 'Address',
            edit: false
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            first: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            last: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleTelChange = (e) => {
        this.setState({
            tel: e.target.value
        })
    }

    toggleEdit = () =>{
        this.setState({
            edit: false
        })
    }

    onSave = () =>{
        this.setState({
            edit: true
        })
    }


    render() {
        const {first, last, email, tel, edit} = this.state

        return(
            <div className='personalSection'>
                <form>
                    <fieldset disabled={edit} className='personal'>
                        <div className='name-box'>
                            <input onChange={this.handleFirstNameChange} 
                            className='first'
                            type='text'
                            value={first}/>
                            <input onChange={this.handleLastNameChange} 
                            className='last'
                            type='text'
                            value={last}/>
                        </div>
                        <div className='contact'>
                            <label>Contact Information:</label>
                            <input onChange={this.handleEmailChange}
                            className='email'
                            type='email'
                            value={email}/>
                            <input onChange={this.handleTelChange} 
                            className='tel'
                            type='tel'
                            value={tel}/>
                        </div>
                    </fieldset>
                    <div className='buttonBox'>
                        <button type='button' onClick={this.onSave}>Save</button>
                        <button type='button' onClick={this.toggleEdit}>Edit</button>
                    </div>
                </form>  
            </div>
        )
    }
}

export default Personal