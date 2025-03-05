import React from "react";

class Card extends React.Component{
    
    

    render(){
        // console.log(React);
        // console.log(this.props);
    

        return(
            <div>
                <h1>{this.props.n}</h1>
                <p>{this.props.g}</p>
            </div>
        )
    }
}

export default Card