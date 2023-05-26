import { useState } from 'react';
function Button1(){
	const [showAlert, setShowAlert] = useState(false);
	const handleClick = () => {
		setShowAlert(true);
	      };
	return (
		<div>
		  <button onClick={handleClick} className='btn btn-primary'>My Button</button>
		  {showAlert && (
		    <div className="alert alert-danger " role="alert">
		      <p>My alert</p>
		      <span className="close-icon" onClick={() => setShowAlert(false)}>
            &#10005;
          </span>
		      {/* <button onClick={() => setShowAlert(false)}>Close</button> */}
		    </div>
		  )}
		</div>
	      );
}

export default Button1;