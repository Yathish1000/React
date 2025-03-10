import react from "react"

class Login extends react.Component{
 constructor(){
    super()
    this.state={
        ShowLogin:false
    }
 }

 componentDidUpdate(){
    alert("Clicked")
 }

 render(){
    return(
        <div>
            <button onClick={()=>{this.setState({ShowLogin:!this.state.ShowLogin})}} >Show login</button>
            {this.state.ShowLogin &&             <form>
                <input type="name " placeholder="name here"/>
                <input type="name " placeholder="name here"/>
                <input type="name " placeholder="name here"/>
                <input type="name " placeholder="name here"/>
                <button>Submit</button>
            </form>}
        </div>
    )
 }
}

export default Login