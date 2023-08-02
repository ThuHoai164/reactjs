import React from 'react';

// from 
// class ChildComponent extends React.Component{
//     state = {
//         firstName: '',
//         lastName:''
//     }

//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//     handleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     handleChangeSubmit = (event) => {
//         event.preventDefault()
//         // alert('click me')
//         console.log(' >>> check dat input:', this.state)
//     }

    

//     render(){
       
//         console.log(' >>> check props:', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;

//         let {name,age,address,arrJobs } = this.props;
//         let a = '';

//         return(
//             <>
//                 <div className='job-lists'>
//                 {/* ChildComponent:{name}-{age}-{address} */}
//                     {
//                         a = arrJobs.map((item, index) => {
//                             return (
//                                 <div>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         })   
//                     }
//                    {console.log('>>>check map array: ',a)} 
                         
//                 </div>
//             </>
           
//         )
//     }
// }

// nesting compment : Quan heej cha con 

// class compnent, funtion
// const ChildComponent = (props) => {
//     console.log('>>> check child props', props)
//     return (<div>Hello arrow function</div>)
// }

// conditional : sử dụng điều kiện
// const ChildComponent = (props) => {
//     console.log('>>> check child props', props)
//     let {arrJobs} = props;
//     return (
//         <>
//             <div className='job-lists'>
//                 {/* ChildComponent:{name}-{age}-{address} */}
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return (
//                                 <div>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         } 
//                     })   
//                 }
                       
//             </div>
//         </>
//     )
// }

class ChildComponent extends React.Component{
        state ={
            showJobs: false
        } 

        handleShowHide = () => {
            this.setState({
                showJobs: !this.state.showJobs
            })
        }
    render(){
       
        let {arrJobs } = this.props;
        let {showJobs} = this.state;
        // let check = showJobs === true? 'showJobs = true' : 'showJobs = false';
        // console.log ('>>> check conditional:', check)
        return(
            <>
                { showJobs === false && 
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                }

                {showJobs === true &&
                    <>
                        <div className='job-lists'>
                        {
                        arrJobs.map((item, index) => {
                                return (
                                    <div>
                                        {item.title}-{item.salary}
                                    </div>
                                )
                            })   
                        }    
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </> 
                }
                
            </>
           
        )
    }
}
export default ChildComponent;
