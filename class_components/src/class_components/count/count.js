import react from "react"

class Count extends react.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            num: 20,
            color:"red",
            yathish:"green"
            
        }
        this.increase = this.hign.bind(this)
        this.decrease = this.low.bind(this)
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 })
    }

    dec = () => {
        this.setState({ count: this.state.count - 1 })
    }

    hign() {
        this.setState({ num: this.state.num + 10 })
    }
    low() {
        this.setState({ num: this.state.num - 1 })
    }


    render() {
        return (
            <div style={{backgroundColor:this.state.color}}>
                <button onClick={()=>{this.setState({color:this.state.color = "violet"})}}>violet</button>
                <button onClick={()=>{this.setState({color:this.state.color = "blue"})}}>blue</button>
                <button onClick={()=>{this.setState({color:this.state.color = "orange"})}}>orange</button>
                <button onClick={()=>{this.setState({color:this.state.color = "pink"})}}>pink</button>
                
                <div style={{ textAlign: "center" }}>
                    <button onClick={() => { this.setState({ count: this.state.count + 2 }) }}>+</button>
                    <button onClick={this.inc}>+</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.dec} disabled={this.state.count <= 0}>-</button>
                    <button onClick={() => { this.setState({ count: this.state.count - 20 }) }}>-</button>

                </div>

                <div style={{ textAlign: "center" }}>
                    <button onClick={this.hign.bind(this)}>+</button>
                    <button onClick={this.increase}>+</button>

                    <h1>{this.state.num}</h1>

                    <button onClick={this.decrease} >-</button>
                    <button onClick={this.low.bind(this)} >-</button>

                </div>
                <h1 style={{color:this.state.yathish}}>SHIVA</h1>
                <button onClick={()=>{this.setState({yathish:this.state.yathish="red"})}}>red</button>
                
            </div>
        )
    }
}

export default Count