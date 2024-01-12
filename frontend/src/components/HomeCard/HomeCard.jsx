import React from "react";
import { AiOutlineUser } from "react-icons/ai"; // Example icon, you can change it

const Card = (props) => {
  return (
    <div style={{ backgroundColor:"rgb(219 234 254)",width: "280px", height:"200px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "46px", borderRadius: "10px", marginLeft:"105px",marginBottom:"40px" }}>
      <div style={{ display: "flex",
      flexDirection:"column", alignItems: "left" }}>  
        <h2 style={{ color:"black", margin: "15px" , fontSize:"1.75rem"}} >{props.number}</h2>
      </div>
     
      <button style={{ height:"50px", width:"200px",marginTop:"10px",padding: "10px 30px", backgroundColor: "rgb(30 64 175)", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>
        {props.type}
      </button>
    </div>
  );
};

export default Card;
