import React from "react";


// Chia catws Component
class AddComponent extends React.Component {
    state ={
        titleJob:'',
        salary:''
    }
    handleChangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleChangeSubmit = (event) => {
        event.preventDefault()
        // alert('click me')
        // console.log(' >>> check dat input:', this.state)
    }
    render(){
        return(
            <form >
                <label htmlFor="fname">Job title:</label>
                    <input 
                        type='text'  
                        value={ this.state.titleJob}
                        onChange={(event) => this.handleChangetitleJob(event)}
                    /> 
                    <br/>
                    <label htmlFor="lname">salary:</label>
                    <input 
                        type='text'  
                        value= {this.state.salary}
                        onChange={(event) => this.handleChangesalary(event)}
                    /> 
                    <br/>
                    <input 
                        type='button'  
                        value= 'submit'
                        onClick={(event) => this.handleChangeSubmit(event)}
                    /> 
            </form>
        )
    }
}

export default AddComponent;