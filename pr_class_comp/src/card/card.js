import React from "react";
class Card extends React.Component{


    render(){

        return(
            <div>
            <h3>{this.props.name}</h3>
            <h4>{this.props.gender}</h4>
            <p>{this.props.age}</p>
            </div>
        )
    }
}
export default Card