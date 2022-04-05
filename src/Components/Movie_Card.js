import React from "react";
function Movie_Card(props)
{
    const style1 ={
        fontWeight: "bolder",
        textTransform: "uppercase",
    }
    return (
        
        <div className="card rounded" style={{    
            width: "12rem",
            border: "3px solid",
            padding: "7px",
            margin: "4px"}}>
                <div className="card-body">
                    <p style={style1}>{props.title} </p>
                    <p className="card-text"><span style={{color:"green"}}>Description : </span>{props.description}</p>
                    <p className="card-text"><span style={{color:"green"}}>Rating : </span>{props.rating}</p>
                    <p className="card-text"><span style={{color:"green"}}>URL : </span>{props.url}</p>
                    
                </div>
        </div>
   

);
}
export default Movie_Card