import React from 'react'
import Count from './class_components/count/count'
import Card from './class_components/Card/Card'
import Login from './class_components/login/login'

class App extends React.Component {

  // componentDidMount(){
  //   alert("welcome to the website")
  //   console.log("mahadev")
  // }

  componentDidUpdate(){
    console.log("updated");
    
  }


  render(){

    const data = [
      {
        name:"subhan",
        gender:"male",
        age:21,
      },{
        name:"goutham",
        gender:"male",
        age:21,
      },{
        name:"yathish",
        gender:"male",
        age:21,
      },{
      name:"surya",
      gender:"male",
      age:21,
    }
    ]


    return(
      <div>
        <button onClick={()=>{console.log("hiii")}}>hiii</button>
        {data.map(x=>{
          return(
            <Card n={x.name} g={x.gender}/>
          )
        })}
        <Count/>
        <Login/>
      </div>
    )
  }
}

export default App