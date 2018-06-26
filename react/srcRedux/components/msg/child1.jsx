import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"
import Store,{actions} from "../../store"
class Child1 extends Component {
     constructor(props){
        super(props)
        this.state={
            num:1
        }
        Store.dispatch(actions.addNum(this.state.num))
     }
     addHandle(){
         this.setState({
             num:this.state.num+1
         },()=>{
            Store.dispatch(actions.addNum(this.state.num))
         })
     }
    render() {
        return (
            <div>
                <h3>Child1子组件</h3>
                <button onClick={this.addHandle.bind(this)}>递增num值</button>
            </div>
        )
    }
}

export default ()=><Route path="/Msg/Child1" component={Child1}/>