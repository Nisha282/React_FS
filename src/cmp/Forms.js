import React from 'react'

export default class Forms extends React.Component {
    constructor(){
        super()
        this.state={
            user:null,
            password:null
        }
    }
    submit(){
        console.warn(this.state)
    }
    render(){
        return(
            <div>

                <h1>Form Component</h1>
            </div>
        )
    }
}