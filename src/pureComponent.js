import React , {Component, PureComponent} from 'react';

class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            data:10
        }
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div>
                    <h1>Pure Component {this.state.data}</h1>
                    <button onClick ={()=>{this.setState({data:20})}}>Update State</button>
                </div>
            </div>
        )
    }
}

export default Pure