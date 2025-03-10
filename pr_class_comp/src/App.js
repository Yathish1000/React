import React from "react";
import Card from "./card/card";

class App extends React.Component{


  render(){
    const data=[{
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
}]
    



    return(
      <div>
      <button>ram</button>

      {data.map(x=>{
        return(
          <Card name={x.name} gender={x.gender} age={x.age}/>
        )
      })}
      </div>
    )
  }
}
export default App