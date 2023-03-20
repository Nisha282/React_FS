// import React from 'react'

// export default class Home extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1> Home Component</h1>
//             </div>
//         )
//     }
// }


// -------------Example of memo --------------------
import React,{memo} from 'react'
const Home =(props)=>{
    console.log("inner component" , props.data)
    return(
        <div>
            <h1> Home Component</h1>
        </div>
    )
}

export default memo(Home)