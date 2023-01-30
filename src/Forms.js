// useEffect Example ----------

// import React ,{useEffect,useState} from 'react';

// const Form =()=>{
//     const [count , setCount]=useState(1)
//     useEffect(()=>{
// console.warn(count)
//     },[count==5])

// return(
//     <div>
// <h1>Use Effect Hooks in React js ...{count}</h1>
// <button onClick={()=>setCount(count+1)}> Update State</button>
//     </div>
// )

// }
// export default Form;

// ===========================================================================


// form creation---------------------------


import React from 'react'
export default class Forms extends React.Component {
    constructor(){
        super()
        this.state={
            user:null,
            password:null

        }
    }

    submit()
    {
        console.warn(this.state)
    }

render(){
    return(

        <div>     
           <h1> Form Handling</h1>
           <input
            type = "text" 
            name= "user" 
            onChange={(e)=>{this.setState({user:e.target.value})}} 
            />
           <br/><br/>
          
           <input 
           type = "password"
            name= "password"  
            onChange={(e)=>{this.setState({password:e.target.value})}} 
            />
           <br/><br/>
          <button onClick={()=>this.submit()}>Submit</button>



        </div>
    )
}


}