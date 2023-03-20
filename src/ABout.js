// -----------------lazing loading example------------

import React , {Component} from 'react';

// class ABout extends Component {
//     render(){
//         return(
//             <div>
//                 <h1>About Component</h1>
//                 <h1>About Component</h1>
//                 <h1>About Component</h1>
//                  <h1>About Component</h1>
//                  <h1>About Component</h1>
//                  <h1>About Component</h1>
//             </div>
//         )
//     }
// }


// ------------------------typechecking prototype----------------
import proptypes from 'prop-types';
class ABout extends Component {
    render(){
        return(
            <div>
                <h1>About Component</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
//  ABout.proptypes ={
//     age:proptypes.number,
// }
export default ABout;