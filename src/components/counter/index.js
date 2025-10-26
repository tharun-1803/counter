import { Component } from "react"
import "./index.css"

class Counter extends Component{
    state={count:0}
    increase=()=>{
        this.setState(prevState =>{
            console.log(`Previous state value ${prevState.count}`)
            return {count:prevState.count +1}
        })
    }

    decrease=()=>{
        this.setState(prevState =>{
            console.log(`Previous state value ${prevState.count}`)
            return {count:prevState.count -1}
        })
    }
    render(){
        const {count}=this.state
        return(
            <div className="container">
                <h1 className="heading">Counter</h1>
                <p className="counter">{count}</p>
                <div>
                    <button onClick={this.increase} className="button">Increase</button>
                    <button onClick={this.decrease} className="button">Decrease</button>
                </div>
            </div>
        )
    }
}

export default Counter