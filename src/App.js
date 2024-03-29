// import React from "react";
import React, {useState,useEffect} from 'react'
// import React, { useState } from "react";
// import React, { Component } from "react";
// import React, {Suspense , lazy}  from "react";
// const Home = lazy(()=> import('./Home'))
// const ABout = lazy(()=> import('./ABout'))
// import logo from "./";
// import "./App.css";
// import Student from './Student'
// import Forms from "./Forms";
// import  EH from "./EH.js";
// import User from "./User";
// import ErrorBound from "./ErrorBound";
// import Style from "./Style";

// import About from "./cmp/About";
// import Home from "./cmp/Home";
// import Forms from "./cmp/Forms";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Other from "./Other";
// import { Button, Container , Row ,Col } from "react-bootstrap";
// import { Button, Modal } from "react-bootstrap";
// import PureComponent from "./pureComponent";
// import Home from "./Home";
// import ABout from "./ABout";
import useTitle from './useTitle';






// / ======================== 1St Code Run in React & class Component===========================================================
// import logo from "./logo.svg";
// import Profile from "./Profile";
// import Home from "./Home";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//         </a>
//         {/* <Home /> */}
//         <Profile text = "Function Profile Component" />
//       </header>
//     </div>
//   );
// }
// ==========================================================================================================

// ======================---- Components in React -----=============================================
// "components are independent and reusable bits of code ."
// types of components ---
// 1 . Class Components - Profile.js Example is given
// 2. Functional Components - Profile.js Example is given (it is also known as stateless component)

// --------------------------JSX----------------------------------------------
// JavaScript XML (JSX)
// jsx allow us to directly write html in react .

// import logo from "./logo.svg";
// import Profile from "./Profile";
// import Home from "./Home";
// function App() {
//   return (
//     <div className="App">
//        <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       <h1> JSX with React </h1>

//       </header>

{
  /* JSX WITHOUT REACT EXAMPLE */
}
{
  /* {
        React.createElement(
          'h1' , 
        {className : 'head-tag'}, 
          'Hello Jsx'
        )
      } */
}
//     </div>
//   );
// }

// =============================================================================
// state - "state is a data container , which is store the data ."

//
// ================================props with functional component======================================================

// import Student from "./Student";
// function App(){
//    const [name , setName] = useState("Nisha")
//    return (
//      <div className='App'>
//        <h1> Props in React : </h1>
//          <Student name={"nisha"} email = "nisha@gmail.com" other={{address: 'raipur' , mobile :"111"}}/>
//         <Student name={"nik"} email = "nik@gmail.com" other={{address: 'raigarh' , mobile :"121"}}/>
//         <Student name={"nish"} email = "nish@gmail.com" other={{address: 'rajpura' , mobile :"122"}}/>

//       <Student name={name}/>
//       <button onClick = {()=>{setName("Nishu")}}> Update Name</button>
//     </div>
//        );
//  }
// ====================================================================================

// ===================props with class component======================
// import Student from './Student';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Nishaa"
//     }
//   }
//   render()
//   {
//     return(
//       <div className='App'>
//         <h1> Props !</h1>
//         <Student name = {this.state.name} email="nish@gmail.com"></Student>
//         <button onClick={()=>this.setState({name:"Sahu"})}>Update Name </button>
//       </div>
//     )
//   }
// }
// =======================================================================================

// ================class component using state ========================

// class App extends React.Component {

// constructor(){
//  super();
//  this.state ={
//  // data:"nisha"
//  data:1
// }
// }
// apple()
// {
// //   this.setState({data:"nishi"})
// this.setState({data:this.state.data+1})
// }

//  render(){
//    return(
//      <div className='App'>
//        <h1> {this.state.data}</h1>
//      <button onClick={()=>this.apple()}>updateData</button>
//      </div>
//    )
//  }

// }
// ===================================================================================

// ==================================== functional component using state =========================
// function App(){
//   // const [data , setData] = useState("Nisha")
//   const [data , setData] = useState(0)

//   function updateData(){
//     // setData("Nishu")
//     setData(data+1)

//   }
//   return(
//     <div className='App'>
//       <h1> {data}</h1>
//       <button onClick ={updateData}>updateData</button>
//     </div>
//   )
// }
// ============================================================================================

// ----------------------------------------Hide And Show----------------------------------
// toggle

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render()
//   {
//     return(
//       <div>{
//         this.state.show ?
//         // <h1> Hide And Show</h1>
//         <button> Hide And Show</button>
//         : null
//         }

//         <button onClick={()=>{this.setState({show : !this.state.show})}}>Toggle Me </button>
//       </div>
//     )
//   }
// }

// ================================================================================

// -------------------------Event Handling by Click Event----------------------------

// import  EH from "./EH.js";
// function App() {
//     return (
//       <div className="App">
//         <EH/>
//       </div>
//     );
//   }

// ==================================================================================

// =============click event and function ====================

// function App(){

//   function apple(){
// alert("function called")
//   }
//   return(
//     <div className='App'>
//       <h1> Hello World !</h1>
//       <button onClick ={apple}>click me</button>
//     </div>
//   )

// }
// ======================================================================

// ------------------Life Cycle Method------------------------------------

// there are 3 phases-
// 1 . Mounting -(birth) 2. Updating -(update)3. Unmounting-(death)

// class App extends React.Component{

//   constructor(){
//     super();
//     console.warn("constructor")
//   }
//   componentDidMount(){
//     console.warn(" componentDidMount")
//   }
//   render(){
//     console.warn("render")
//     return(
//       <div>
//         <h1>Life Cycle Method</h1>
//       </div>
//     )
//   }
// }

// ==========================================================================

// -------------------ComponentDidMount-----------------------------------------

// class App extends React.Component{

//     constructor(){
//       super();
//       this.state={
//         data:null
//       }
//       console.warn("constructor")
//     }
//     componentDidMount(){
//       this.setState({data:"updated"});
//       console.warn(" componentDidMount")
//     }
//     render(){
//       console.warn("render")
//       return(
//         <div>
//           <h1>Life Cycle Method : componentDidMount</h1>
//         </div>
//       )
//     }
//   }

// =====================================================================

// ----------------ComponentDidUpdate------------------------------------

// ComponentDidUpdate(prevProps ,prevState , Snapshot)--> there are 3 parameter

// class App extends React.Component{

//       constructor(){
//         super();
//         this.state={
//           active:null,
//           who :null
//         }

//       }
//       componentDidUpdate(){
//         console.warn(" componentDidUpdate")
//         if(this.state.who === null){
//           this.setState({who: "nisha sahu"})
//         }
//       }

//       render(){
//         // console.warn("render")
//         return(
//           <div>
//           <h1>React componentDidUpdate{this.setState.who}</h1>
//           <button onClick={()=>{this.setState({active:"yes"})}}>Activate</button>
//            </div>
//          )
//        }
//      }

// ---------------------------------------------------------------------------------------------

// ===========================ComponentWillUnmount-----------------------------------------

// componentWillUnmount()
// import User from './User;
// class App extends React.Component{
//   constructor(){
//             super();
//             this.state={
//               toggle:true
//             }

//           }
//   render(){
//     // console.warn("render")
//     return(
//       <div>
//       <h1>React componentWillUnmount</h1>
//       {
//         this.state.toggle ?
//         <User/>
//         :null
//       }
//       <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
//        </div>
//      )
//    }
//  }
// ===========================================================================

// ----------------------------Hooks------------------------------------

// hooks only work on functional component

// function App(){
//   const[count ,setCount]= useState(100)
//   return(
//     <div>
//       <h1> Hooks in functional Component {count}</h1>
//       <button onClick={()=>{setCount(count+1)}} >Increment</button>
//     </div>

//   )
// }
// ========================================================

// --------------------useEffect Hook-------------------------

// function App(){
//     // const[count ,setCount]= useState(100)
//     return(
//       <div>
//         <Forms/>
//       </div>

//     )
//   }

// ======================================================================

// ==============forms creation================
// function App(){
//   return(
//     <div className='App'>
//     <Forms />
//     </div>
//   )
// }
// -------------------------------------------------------

// -------------validation for form------------------------
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "",
//       password: "",
//       nameError: "",
//       passwordError: ""
//     }
//   }
//   valid() {
//     if (!this.state.name.includes("@") && this.state.password.length < 5) {
//       this.setState(
//         { nameError: "Invalid Name", passwordError: "password length should be more than 5" }
//       )
//     }
//    else if (!this.state.name.includes("@") ) {
//       this.setState(
//         { nameError: "Invalid Name" }
//       )
//     }
//    else if (this.state.password.length < 5) {
//       this.setState(
//         {  passwordError: "password length should be more than 5" }
//       )
//     }

//     else{
//       return true
//     }
//   }
//   submit() {
//     this.setState(
//       { nameError: "", passwordError: "" }
//     )

//     if (this.valid()) {
//       alert(" form has been submitted")
//     }

//   }
//   render() {
//     return (
//       <div className="App">
//         <h1> Form Validation</h1>
//         <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
//         <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
//         <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
//         <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
//         <button onClick={() => this.submit()}>Submit</button>

//       </div>
//     )
//   }
// }

// ==============================================================================

// ==========----listing using map function -------------
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       list:[
//         {name: 'nisha' , phpne:'1212' , email:'nisha@test.com'},
//         {name: 'nik' , phpne:'1232' , email:'nish@test.com'},
//         {name: 'nis' , phpne:'1245' , email:'nishaaa@test.com'}
//       ]
//     }
//   }
//   render(){
//     return(
//       <div className='App'>
//       <h1> listing with app</h1>{
//         this.state.list.map((item)=>
//           <div>
//             <span> Name:{item.name}   Email:{item.email}</span>

//           </div>
//         )

//       }
//       </div>
//     )
//   }
// }
// =====================================================

// ================style in react=================

// style - 1. global , 2. Inline 3.Conditional
// import Style from './Style';

// class App extends React.Component{
//   render(){
//     return(
//       <div>

//         <Style  data ="apply"/>
//       </div>
//     )
//   }
// }

// =======================================================================

// ==========================Routing------------------------------------------
// import About from './cmp/About';
// import Home from './cmp/Home';
// import Forms from './cmp/Forms';

// import {BrowserRouter as Router , Route, Link} from 'react-router-dom'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <About />
//         <Home />
//         <Forms /> */}
//         {
//           <Router>
//             <Link to=""> Home</Link>
//             <Link to="/about"> About</Link>
//             <Link to="/forms"> Forms</Link>

//             <Route exact path="/" Component={Home} />
//             <Route path="/about" Component={About} />
//             <Route path="/forms" Component={Forms} />
//           </Router>
//         }
//       </div>
//     );
//   }
// }
// -----------------------------------------------------------------------------

// =============================API CALL========================================
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       users: null,
//     };
//   }
//   componentDidMount() {
//     fetch(' https://reqres.in/api/users').then((resp) => {
//       resp.json().then((result) => {
//         // console.warn(result.data)
//         this.setState({ users: result.data });
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Fetch API Data</h1>
//         {this.state.users
//           ? this.state.users.map((item, i) =>
//               <div>
//                 <p>

//                   {i} --
//                   {item.first_name}
//                   {item.last_name}
//                 </p>
//               </div>
//             )
//           : null}
//       </div>
//     );
//   }
// }
// ==========================================================================================

// ------------------------------portal------------------------
// import Other from './Other';
// class App extends React.Component {

//   render(){
//     return(
//       <div>
//         <h1>React Portal</h1>
//         <Other/>
//       </div>
//     )
//   }
// }

// =================================================================

// ----------------------use refs-------------------------------------

// class App extends React.Component {
// constructor(){
//   super()
//   this.userRef= React.createRef();
// }
// editVal(){
// // console.warn(this.userRef)
// this.userRef.current.focus()
// }
//     render(){
//       return(
//         <div>
//           <h1>What is Ref in React</h1>
//           <input ref ={this.userRef} type ="text" name = "user" />
//           <button onClick={()=>this.editVal()}> Click me</button>
//         </div>
//       )
//     }
// }

// ===========================================================================

// Use bootstrap with react
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Use bootstrap with react </h1>
//         <Button onClick={() => alert("item clicked")}>Click me</Button>
//         <Container>
//           <Row className = "justify-content-md-center">
//             <Col xs lg ="2">
//               1 of 3
//             </Col>
//             <Col md = "auto"> Variable width content</Col>
//             <Col xs lg ="2">
//               3 of 3
//             </Col>
//           </Row>
//           <Row>
//             <Col> 1 of 3</Col>
//             <Col md = "auto">Variable width content</Col>
//             <Col xs lg = "2">
//               3 of 3
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// =====================================================================

// ------------BOOTSTRAP MODAL------------------------

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       show:false
//     }
//   }
//   handleModal(){
//     this.setState({show : !this.state.show})
//   }

//     render(){
//       return(
//         <div>
//       <button onClick={()=>{this.handleModal()}}> Click Me </button>
//       <Modal show ={this.state.show} onHide={()=>this.handleModal()}>
//         <Modal.Header closeButton>Modal Heading</Modal.Header>
//         <Modal.Body>
//           Hello EveryOne
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={()=>{this.handleModal()}}>Close</Button>
//           <Button onClick={()=>{this.handleModal()}}>Save</Button>
//         </Modal.Footer>
//       </Modal>
//         </div>
//       )
//     }
//   }

// =============================================================================

// -------------Error Boundary--------------------------------
// import User from './User';
// import ErrorBound from "./ErrorBound";
// class App extends React.Component {

//   render(){
//     return(
//       <div>
//         <h1>Error Boundary in React</h1>

//         <ErrorBound ><User/></ErrorBound>
//       </div>
//     )
//   }
// }

// =========================================================

// ------------------Server Side Rendwring---------------

//----------------------- pure component---------------------
// class App extends React.Component {

//     render(){
//       return(
//         <div>
//           <PureComponent/>
//         </div>
//       )
//     }
//   }

// =======================================================================

// =================memo============================
// import React, { useState } from "react";
// const App=()=>{
//   const [count ,setCount]=useState(0)
//   const [data,setData] = useState(0)
//   return(
//     <div>
//       Memo with react {count}
//       <Home data ={data}/>
//       <button onClick={()=>setCount(count+1)}>count</button>
//       <button onClick={()=>setData(data+1)}>Data</button>
//     </div>
//   )
// }
// =======================================================

// ---------------------JWT AUTHENTICATION----------------
// import React, { Component } from "react";
// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       email: null,
//       password: null,
//       login:false,
//       token:null

//     }
//   }

//   login(){
//     console.log("form data " , this.state)
//   }
//   render(){
//     return(
//       <div>
//         <h1>JWT Token with</h1>
//         <div>
//           <input type = "text" onChange={(event)=>{this.setState({email:event.target.value})}} /><br/><br/>
//           <input type = "password" onChange={(event)=>{this.setState({password:event.target.value})}} /><br/><br/>
//           <button onClick={()=>{this.login()}}>Login</button>
//         </div>
//       </div>
//     )

//   }
// }
// ==================================================================

// ------------UNCONTROLLED COMPONENT-------------------

// class App extends React.Component {
//   constructor(){
//     super()
//     this.name = React.createRef();
//     this.password= React.createRef();
//   }
//   submitHandle(event){
//     event.preventDefault()
//     console.log(this.name.current.value, this.password.current.value)

//   }
//   render(){
//     return(
//       <div className="App">
//         <h1>Uncontrolled Component</h1>
//         <form onSubmit={(event)=>{this.submitHandle(event)}}>
//           <input type="text" placeholder="enter name" ref={this.name}/> <br/> <br/>
//           <input type="password" placeholder="enter Password" ref={this.password}/> <br/> <br/>
//           <button type="submit">Submit</button>

//         </form>
//       </div>
//     )
//   }

// }
// -------------------------------------------------------------------

// ---------------------CONTROLLED COMPONENT--------------------------

// class App extends React.Component {
//   constructor() {
//     super();
//     this.State = {
//       name: "",
//       password: "",
//     };
//   }
//   submit() {
//     console.log(this.state);
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Controlled Component</h1>
//         <input
//           type="text"
//           placeholder="enter name"
//           onChange={(event) => {
//             this.setState({ name: event.target.value });
//           }}
//         />
//         <br /> <br />
//         <input
//           type="password"
//           placeholder="enter password"
//           onChange={(event) => {
//             this.setState({ password: event.target.value });
//           }}
//         />
//         <br /> <br />
//         <button
//           onClick={() => {
//             this.submit();
//           }}
//         >
//           submit
//         </button>
//       </div>
//     );
//   }
// }

// ==============================================================

// ----------------------Lazy Loading-------------------------

// class App extends React.Component {
//   render(){
//       return(
//           <div>
//              <h1>Lazy Loading</h1>
//             <Suspense fallback={<div>please wait...</div>}>
             
//               <Home/>
              
//               </Suspense>
//               <Suspense fallback={<div>please wait...About</div>}>
             
            
//               <ABout/>
//               </Suspense>
//           </div>
//       )
//   }
// }
// ==================================================


// =================Uplod File=====================
// class App extends React.Component {
// upload(e){
//   console.log(e.target.files)
//   const files =e.target.files
//   const formData = new FormData();
//   formData.append('img',files[0])
//   fetch('http://127.0.0.1:8000/api/store' ,{
//     method :"POST",
//     body:formData
//   }).then((resp)=>{
//     resp.json().then((result)=>{
//       console.log("result" ,result)
//     })
//   })
// }
//       render(){
//         return(
//           <div>
//            <h1>Upload File in React js</h1>
//            <input type="file" onChange={(e)=>this.upload(e)} name ="img" />
//           </div>
//         )
//       }
//     }
// =================================================

// --------------Type CHecking with proptypes in React------------
// class App extends React.Component {

//       render(){
//         return(
//           <div>
//           <h1>Type checking with prototypes in React</h1>
//           <ABout age={"20"} />
//           </div>
//         )
//       }
//     }

// ===================================================

// ---------------custum hooks---------------
// import useTitle from './useTitle';
const App =()=> {
 
  const [count ,setCount]=useState(0)
  useTitle(count)
return(
            <div>
            <h1>Custom Hook</h1>
            <button onClick={()=>setCount(count+1)}>Clicks</button>
            </div>
          )
        }
      


export default App;
