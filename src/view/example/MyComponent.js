import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
// class MyComponent extends React.Component{
    
//     state = {
//         name : 'Eric',
//         channel : 'Hoi dan it'
//     }

//     handleOnChangeName =(event) => {
//         this.setState({
//             name : event.target.value ,// cap nhat lai state
//             channel: ' Hi'
//         })
//     }

//     // dom envent
//     handleClickButton =() => {
//         console.log('Hi the button')
//         alert('Click me')
//     }

//     chaning state
//     render(){
//         // let name = 'Eric'
        
//         return(
//             <div className='abc'>
//                 <div className='first'>
//                     <input value = {this.state.value} type='text' 
//                         onChange={(event) => this.handleOnChangeName(event)}
//                     />
//                 {/* {console.log('My name is :', name)} */}
//                 Hello, Iam a MyComponent, My name is {this.state['name']}
//                 </div>
//                 <div className='second'>
//                     My youtubre channel:{this.state.channel}
//                 </div>
//                 <div className='thrid'>
//                     <button onClick={() => this.handleClickButton() } >Cick me</button>
//                 </div>
 
//             </div>
//         )
//     }
// }

// from 
class MyComponent extends React.Component{
    state = {
        // firstName: '',
        // lastName:'',
        arrJobs: [
            {id : ' abcJob1', title:'developer', salary:'500'},
            {id : ' abcJob2', title:'Tests', salary:'400'},
            {id : ' abcJob3', title:'manager', salary:'1000'}
        ]
    }

    // handleChangeSubmit = (event) => {
    //     event.preventDefault()
    //     // alert('click me')
    //     console.log(' >>> check dat input:', this.state)
    // }

    addNewJob = (job) => {
        console.log('Check job from parent: ', job)
        let currenJobs = this.state.arrJobs;
        currenJobs.push(job)

        this.state({
            // arrJobs:[...this.state.arrJobs, Job] cach viet tat
            arrJobs: currenJobs
        })
    }
    render(){
        console.log(' >>> call render:', this.state)
        return(
            <>
                <AddComponent/>
                

                {/* Truyen Data tu cha sang con - props */}
                <ChildComponent 
                    name ={this.state.firstName}
                    age ={'25'}

                    //  Render Nhieeuf data voi props : cho gia tri value thi child thay doi theo
                    address ={'Ha Noi'}
                    arrJobs = {this.state.arrJobs}
                   
                />

               
                
            </>
        )
    }
}

// nesting compment : Quan heej cha con 

export default MyComponent;
