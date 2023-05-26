// import { useState } from "react";

interface Props{
  onDismiss:()=>void;
  }

function Alert({onDismiss}:Props){
  
  return(
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
  My alert
  <button className="btn-close" onClick={onDismiss}></button>
</div>
  )
}

export default Alert;