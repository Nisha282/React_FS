import React from "react";

// export default class EH extends React.Component{

//     testFun(){
//         alert("testFun")
//     }
//     render() {
//         return(
//             <div>
//                 <h1> Profile</h1>
//                 <button onClick={this.testFun.bind()}>Click me</button>
//             </div>
//         )
//     }
// }


// ================================================================

export default function EH(){

    // function testFun(){
    //     alert("test fun")
    // }

    const testFun=()=>{
        alert("test fun")
    }
        return(
            <div>
                <h1> Profile</h1>
                <button onClick={testFun}>Click me</button>
            </div>
        )
    
}