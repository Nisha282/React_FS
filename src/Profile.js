import React from 'react';

// -------------------------class component example --------------------------------
// class Profile extends React.Component {
//     constructor()
//     {
//      super()
//     }
//     componentDidMount(){
//         console.log("called life cycle")
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1> Profile Component</h1>
//             </div>
//         )
//     }
// }
// ----------------------------------------------------------------------------

// ==============================Functional Component =======================================

function Profile(prop){

    const red =()=>{
        alert("red function called")
    }

    return <div>
      <h1 onClick ={red}>{prop.text}</h1>

      {/* <h1>Profile Cmp</h1> */}
    </div>
}
 export default Profile;