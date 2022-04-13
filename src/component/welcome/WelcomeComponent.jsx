import React from "react";
import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
   <h1 style={{color:"red"}} >Welcome</h1>
    <div className="container">
      Welcome {name}. You can manage your todos <Link to="/todos">here</Link>
    </div>
    </>
  );
};

export default WelcomeComponent;
